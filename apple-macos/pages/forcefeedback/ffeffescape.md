> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffeffescape](https://developer.apple.com/documentation/forcefeedback/ffeffescape)

# FFEFFESCAPE (Swift)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.

## Declaration

```swift
struct FFEFFESCAPE
```

## Topics

### Initializers

- [init()](ffeffescape/init%28%29.md)
- [init(dwSize:dwCommand:lpvInBuffer:cbInBuffer:lpvOutBuffer:cbOutBuffer:)](ffeffescape/init%28dwsize_dwcommand_lpvinbuffer_cbinbuffer_lpvoutbuffer_cboutbuffer_%29.md)

### Instance Properties

- [cbInBuffer](ffeffescape/cbinbuffer.md): Specifies the size, in bytes, of the **lpvInBuffer** buffer.
- [cbOutBuffer](ffeffescape/cboutbuffer.md): On entry, specifies the size, in bytes, of the **lpvOutBuffer** buffer. On exit, specifies the number of bytes actually produced by the command.
- [dwCommand](ffeffescape/dwcommand.md): Specifies a plugIn specific command number. Contact the hardware vendor for a list of valid commands and their parameters.
- [dwSize](ffeffescape/dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.
- [lpvInBuffer](ffeffescape/lpvinbuffer.md): Buffer containing the data required to perform the operation.
- [lpvOutBuffer](ffeffescape/lpvoutbuffer.md): Buffer in which the operation’s output data is returned.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [FFCAPABILITIES](ffcapabilities.md): Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.
- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCONSTANTFORCE](ffconstantforce.md): Contains type-specific information for the CONSTANTFORCE effect.
- [FFCUSTOMFORCE](ffcustomforce.md): Contains type-specific information for the CUSTOMFORCE effect.
- [FFEFFECT](ffeffect.md): UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.

# FFEFFESCAPE (Objective-C)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.

## Declaration

```objectivec
struct FFEFFESCAPE;
```

## Topics

### Instance Properties

- [cbInBuffer](ffeffescape/cbinbuffer.md): Specifies the size, in bytes, of the **lpvInBuffer** buffer.
- [cbOutBuffer](ffeffescape/cboutbuffer.md): On entry, specifies the size, in bytes, of the **lpvOutBuffer** buffer. On exit, specifies the number of bytes actually produced by the command.
- [dwCommand](ffeffescape/dwcommand.md): Specifies a plugIn specific command number. Contact the hardware vendor for a list of valid commands and their parameters.
- [dwSize](ffeffescape/dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.
- [lpvInBuffer](ffeffescape/lpvinbuffer.md): Buffer containing the data required to perform the operation.
- [lpvOutBuffer](ffeffescape/lpvoutbuffer.md): Buffer in which the operation’s output data is returned.

## See Also

### Data Types

- [FFCAPABILITIES](ffcapabilities.md): Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.
- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCONSTANTFORCE](ffconstantforce.md): Contains type-specific information for the CONSTANTFORCE effect.
- [FFCUSTOMFORCE](ffcustomforce.md): Contains type-specific information for the CUSTOMFORCE effect.
- [FFEFFECT](ffeffect.md): UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.
