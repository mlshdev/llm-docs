> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/errorkey/oldestcode](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/errorkey/oldestcode)

# oldestCode (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

The error code of the first error that occurred since the last call to [object(forProperty:)](../../object%28forproperty_%29.md) with the [errors](../errors.md) property.  An `NSNumber`

## Declaration

```swift
static let oldestCode: NSSpeechSynthesizer.SpeechPropertyKey.ErrorKey
```

## See Also

### Type Properties

- [count](count.md): The number of errors that have occurred in processing the current text string, since the last call to [object(forProperty:)](../../object%28forproperty_%29.md) with the [errors](../errors.md) property. An `NSNumber`
- [newestCharacterOffset](newestcharacteroffset.md): The position in the text string of the most recent error that occurred since the last call to [object(forProperty:)](../../object%28forproperty_%29.md) with the [errors](../errors.md) property. An `NSNumber`.
- [newestCode](newestcode.md): The error code of the most recent error that occurred since the last call to [object(forProperty:)](../../object%28forproperty_%29.md) with the [errors](../errors.md) property. An `NSNumber`
- [oldestCharacterOffset](oldestcharacteroffset.md): The position in the text string of the first error that occurred since the last call to [object(forProperty:)](../../object%28forproperty_%29.md) with the [errors](../errors.md) property. An `NSNumber`

# NSSpeechErrorOldestCode (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The error code of the first error that occurred since the last call to [objectForProperty:error:](../../object%28forproperty_%29.md) with the [NSSpeechErrorsProperty](../errors.md) property.  An `NSNumber`

## Declaration

```objectivec
extern NSSpeechErrorKey const NSSpeechErrorOldestCode;
```

## See Also

### Type Properties

- [NSSpeechErrorCount](count.md): The number of errors that have occurred in processing the current text string, since the last call to [objectForProperty:error:](../../object%28forproperty_%29.md) with the [NSSpeechErrorsProperty](../errors.md) property. An `NSNumber`
- [NSSpeechErrorNewestCharacterOffset](newestcharacteroffset.md): The position in the text string of the most recent error that occurred since the last call to [objectForProperty:error:](../../object%28forproperty_%29.md) with the [NSSpeechErrorsProperty](../errors.md) property. An `NSNumber`.
- [NSSpeechErrorNewestCode](newestcode.md): The error code of the most recent error that occurred since the last call to [objectForProperty:error:](../../object%28forproperty_%29.md) with the [NSSpeechErrorsProperty](../errors.md) property. An `NSNumber`
- [NSSpeechErrorOldestCharacterOffset](oldestcharacteroffset.md): The position in the text string of the first error that occurred since the last call to [objectForProperty:error:](../../object%28forproperty_%29.md) with the [NSSpeechErrorsProperty](../errors.md) property. An `NSNumber`
