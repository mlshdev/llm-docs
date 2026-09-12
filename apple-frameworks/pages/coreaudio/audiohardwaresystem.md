> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem)

# AudioHardwareSystem

**Framework:** Core Audio  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS 15.0+

The audio objects in the HAL are arranged in a containment hierarchy. The root of the hierarchy is the one and only instance of the system class. The properties of the AudioHardwareSystem describe the process global settings such as the various default devices. The system object also contains all the devices that are available.

## Declaration

```swift
class AudioHardwareSystem
```

## Topics

### Initializers

- [init(id:)](audiohardwaresystem/init%28id_%29.md)

### Instance Properties

- [allowsHogMode](audiohardwaresystem/allowshogmode.md): A Bool where true indicates that this process wants the HAL to automatically take hog mode and false indicates that the HAL should not automatically take hog mode on behalf of the process.
- [allowsSleeping](audiohardwaresystem/allowssleeping.md): A Bool where true indicates that the process will allow the CPU to idle sleep even if there is audio IO in progress. Fasle indicates that the CPU will not be allowed to idle sleep.
- [allowsUnloading](audiohardwaresystem/allowsunloading.md): A Bool where true indicates that this process wants the HAL to unload itself after a period of inactivity where there are no IOProcs and no listeners registered with any object.
- [boxes](audiohardwaresystem/boxes.md): An array of AudioHardwareBoxes that represent all the box objects on the system.
- [clocks](audiohardwaresystem/clocks.md): An array of AudioHardwareClocks that represent all the clock objects on the system.
- [defaultInputDevice](audiohardwaresystem/defaultinputdevice.md): The default input audio device on the system, or nil if there is no default input device.
- [defaultOutputDevice](audiohardwaresystem/defaultoutputdevice.md): The default output audio device on the system, or nil if there is no default output device.
- [defaultSoundEffectsDevice](audiohardwaresystem/defaultsoundeffectsdevice.md): The default sounds effects audio device on the system, or nil if there is no default sound effects device.
- [devices](audiohardwaresystem/devices.md): An array of the AudioHardwareDevices that represent all the devices currently available to the system.
- [isInitializingOrExiting](audiohardwaresystem/isinitializingorexiting.md): A Bool where true indicates the HAL is either in the midst of initializing or in the midst of exiting the process.
- [isProcessInputMuted](audiohardwaresystem/isprocessinputmuted.md): A Bool where true indicates that all data coming into the process for all devices will be silent. A value of false indicates that input data will be received normally.
- [plugins](audiohardwaresystem/plugins.md): An array of AudioHardwarePlugins that represent all the plugin objects on the system.
- [powerHint](audiohardwaresystem/powerhint.md): An AudioHardwarePowerHint enum which allows a process to indicate how aggressive the system can be with optimizations that save power. The default value is none.
- [processes](audiohardwaresystem/processes.md): An array of AudioHardwareProcesses that represent the Process objects for all client processes currently connected to the system.
- [shouldMixStereoToMono](audiohardwaresystem/shouldmixstereotomono.md): A Bool where a value of true indicates that devices should mix stereo signals down to mono.
- [taps](audiohardwaresystem/taps.md): An array of AudioHardwareTaps that represent all the tap objects on the system.

### Instance Methods

- [box(forUID:)](audiohardwaresystem/box%28foruid_%29.md)
- [clock(forUID:)](audiohardwaresystem/clock%28foruid_%29.md)
- [destroyAggregateDevice(\_:)](audiohardwaresystem/destroyaggregatedevice%28__%29.md): Destroys the aggregate device represented by the given AudioHardwareAggregateDevice.
- [destroyProcessTap(\_:)](audiohardwaresystem/destroyprocesstap%28__%29.md): Destroys the given tap.
- [device(forUID:)](audiohardwaresystem/device%28foruid_%29.md)
- [makeAggregateDevice(description:)](audiohardwaresystem/makeaggregatedevice%28description_%29.md): Creates a new aggregate device using the provided description.
- [makeProcessTap(description:)](audiohardwaresystem/makeprocesstap%28description_%29.md): Creates a new tap using the provided description.
- [plugin(forBundleID:)](audiohardwaresystem/plugin%28forbundleid_%29.md)
- [process(for:)](audiohardwaresystem/process%28for_%29.md)
- [setAllowsHogMode(\_:)](audiohardwaresystem/setallowshogmode%28__%29.md): Set the allowsHogMode property.
- [setAllowsSleeping(\_:)](audiohardwaresystem/setallowssleeping%28__%29.md): Set the allowsSleeping property.
- [setAllowsUnloading(\_:)](audiohardwaresystem/setallowsunloading%28__%29.md): Set the allowsUnloading property.
- [setDefaultInputDevice(\_:)](audiohardwaresystem/setdefaultinputdevice%28__%29.md): Set the defaultInputDevice property.
- [setDefaultOutputDevice(\_:)](audiohardwaresystem/setdefaultoutputdevice%28__%29.md): Set the defaultOutputDevice property.
- [setDefaultSoundEffectsDevice(\_:)](audiohardwaresystem/setdefaultsoundeffectsdevice%28__%29.md): Set the defaultSoundEffectsDevice property.
- [setIsProcessInputMuted(\_:)](audiohardwaresystem/setisprocessinputmuted%28__%29.md): Set the isProcessInputMuted property.
- [setPowerHint(\_:)](audiohardwaresystem/setpowerhint%28__%29.md): Set the powerHint property.
- [setShouldMixStereoToMono(\_:)](audiohardwaresystem/setshouldmixstereotomono%28__%29.md): Set the shouldMixStereoToMono property.
- [tap(forUID:)](audiohardwaresystem/tap%28foruid_%29.md)
- [unload()](audiohardwaresystem/unload%28%29.md): Terminates all IO on all devices within the process and releases all resources capable of being released. This essentially returns the HAL to its uninitialized state.

### Type Properties

- [shared](audiohardwaresystem/shared.md): The shared instance of the AudioHardwareSystem class.

## Relationships

### Inherits From

- [AudioHardwareObject](audiohardwareobject.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
