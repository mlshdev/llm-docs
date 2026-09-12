> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/speechpropertykey/errorkey/count](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/speechpropertykey/errorkey/count)

# count (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

The number of errors that have occurred in processing the current text string, since the last call to [object(forProperty:)](../../object%28forproperty_%29.md) with the [errors](../errors.md) property.  An `NSNumber`

## Declaration

```swift
static let count: NSSpeechSynthesizer.SpeechPropertyKey.ErrorKey
```

<a id="Discussion"></a>

## Discussion

Using the [oldestCode](oldestcode.md) keys and the [newestCode](newestcode.md) keys, you can get information about the oldest and most recent errors that occurred since the last call to [object(forProperty:)](../../object%28forproperty_%29.md), but you cannot get information about any intervening errors.

## See Also

### Type Properties

- [newestCharacterOffset](newestcharacteroffset.md): The position in the text string of the most recent error that occurred since the last call to [object(forProperty:)](../../object%28forproperty_%29.md) with the [errors](../errors.md) property. An `NSNumber`.
- [newestCode](newestcode.md): The error code of the most recent error that occurred since the last call to [object(forProperty:)](../../object%28forproperty_%29.md) with the [errors](../errors.md) property. An `NSNumber`
- [oldestCharacterOffset](oldestcharacteroffset.md): The position in the text string of the first error that occurred since the last call to [object(forProperty:)](../../object%28forproperty_%29.md) with the [errors](../errors.md) property. An `NSNumber`
- [oldestCode](oldestcode.md): The error code of the first error that occurred since the last call to [object(forProperty:)](../../object%28forproperty_%29.md) with the [errors](../errors.md) property. An `NSNumber`

# NSSpeechErrorCount (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The number of errors that have occurred in processing the current text string, since the last call to [objectForProperty:error:](../../object%28forproperty_%29.md) with the [NSSpeechErrorsProperty](../errors.md) property.  An `NSNumber`

## Declaration

```objectivec
extern NSSpeechErrorKey const NSSpeechErrorCount;
```

<a id="Discussion"></a>

## Discussion

Using the [NSSpeechErrorOldestCode](oldestcode.md) keys and the [NSSpeechErrorNewestCode](newestcode.md) keys, you can get information about the oldest and most recent errors that occurred since the last call to [objectForProperty:error:](../../object%28forproperty_%29.md), but you cannot get information about any intervening errors.

## See Also

### Type Properties

- [NSSpeechErrorNewestCharacterOffset](newestcharacteroffset.md): The position in the text string of the most recent error that occurred since the last call to [objectForProperty:error:](../../object%28forproperty_%29.md) with the [NSSpeechErrorsProperty](../errors.md) property. An `NSNumber`.
- [NSSpeechErrorNewestCode](newestcode.md): The error code of the most recent error that occurred since the last call to [objectForProperty:error:](../../object%28forproperty_%29.md) with the [NSSpeechErrorsProperty](../errors.md) property. An `NSNumber`
- [NSSpeechErrorOldestCharacterOffset](oldestcharacteroffset.md): The position in the text string of the first error that occurred since the last call to [objectForProperty:error:](../../object%28forproperty_%29.md) with the [NSSpeechErrorsProperty](../errors.md) property. An `NSNumber`
- [NSSpeechErrorOldestCode](oldestcode.md): The error code of the first error that occurred since the last call to [objectForProperty:error:](../../object%28forproperty_%29.md) with the [NSSpeechErrorsProperty](../errors.md) property. An `NSNumber`
