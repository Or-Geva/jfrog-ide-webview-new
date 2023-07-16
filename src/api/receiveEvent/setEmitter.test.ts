import { ReceiveSetEmitterEvent } from '.'
import { WebviewReceiveEventType } from '..'

describe('Event Types', () => {
	test('defines webviewEventType enum correctly', () => {
		expect(WebviewReceiveEventType.SetEmitter).toEqual('SET_EMITTER')
	})

	test('defines SetEmitterEvent interface correctly', () => {
		const eventData: ReceiveSetEmitterEvent = {
			type: WebviewReceiveEventType.SetEmitter,
			data: 'exampleEmitterFunc'
		}

		expect(eventData.type).toEqual(WebviewReceiveEventType.SetEmitter)
		expect(eventData.data).toEqual('exampleEmitterFunc')
	})
})
