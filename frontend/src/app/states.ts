import { State, Action, InitState, UpdateState } from '@ngxs/store';
import { NgxsLifeCycle } from '@ngxs/store/src/symbols';

@State<null>({
    name: 'feature',
    defaults: null
})
export class FeatureState implements Required<NgxsLifeCycle> {

    ngxsOnInit() {
        console.log(`ngxsOnInit()`);
    }

    ngxsAfterBootstrap() {
        console.log(`ngxsAfterBootstrap()`);
    }

    @Action(InitState)
    initState() {
        console.log(`initState()`);
    }

    @Action(UpdateState)
    updateState() {
        console.log(`updateState()`);
    }
}