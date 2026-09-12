> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformattersetproperty(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfnumberformattersetproperty(_:_:_:))

# CFNumberFormatterSetProperty(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets a number formatter property using a key-value pair.

## Declaration

```swift
func CFNumberFormatterSetProperty(_ formatter: CFNumberFormatter!, _ key: CFNumberFormatterKey!, _ value: CFTypeRef!)
```

## Parameters

- `formatter`: The number formatter to modify.
- `key`: The name of the property of `formatter` to set. See [Number Formatter Property Keys](number-formatter-property-keys.md) for a description of possible values.
- `value`: The value of the specified key. This must be an instance of the correct `CFType` object for the corresponding key.

## See Also

### Configuring a Number Formatter

- [CFNumberFormatterSetFormat(\_:\_:)](cfnumberformattersetformat%28____%29.md): Sets the format string of a number formatter.

# CFNumberFormatterSetProperty (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets a number formatter property using a key-value pair.

## Declaration

```objectivec
extern void CFNumberFormatterSetProperty(CFNumberFormatterRef formatter, CFNumberFormatterKey key, CFTypeRef value);
```

## Parameters

- `formatter`: The number formatter to modify.
- `key`: The name of the property of `formatter` to set. See [Number Formatter Property Keys](number-formatter-property-keys.md) for a description of possible values.
- `value`: The value of the specified key. This must be an instance of the correct `CFType` object for the corresponding key.

## See Also

### Configuring a Number Formatter

- [CFNumberFormatterSetFormat](cfnumberformattersetformat%28____%29.md): Sets the format string of a number formatter.
