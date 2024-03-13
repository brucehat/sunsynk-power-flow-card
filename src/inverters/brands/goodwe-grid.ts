import {InverterSettingsDto, InverterStatus} from '../dto/inverter-settings.dto';
import {InverterModel} from '../../types';
import {localize} from '../../localize/localize';

export class GoodweGrid extends InverterSettingsDto {
    brand = InverterModel.GoodweGridMode;
    batteryStatusGroups: InverterStatus = {
        noBattery: {states: ['0'], color: 'yellow', message: localize('common.no_battery')},
        standby: {states: ['1'], color: 'blue', message: localize('common.standby')},
        discharging: {states: ['2'], color: 'red', message: localize('common.discharging')},
        charging: {states: ['3'], color: 'green', message: localize('common.charging')},
        waiting: {states: ['4', '5'], color: 'yellow', message: localize('common.waiting')},
    }
    statusGroups: InverterStatus = {
        idle: {states: ['0', 'idle'], color: 'blue', message: localize('common.idle')},
        exporting: {states: ['1', 'exporting'], color: 'green', message: localize('common.exporting')},
        importing: {states: ['2', 'importing'], color: 'red', message: localize('common.importing')},
    }
    image = 'data:image/png;base64,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';
}
