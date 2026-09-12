> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformattersetproperty(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdateformattersetproperty(_:_:_:))

# CFDateFormatterSetProperty(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets a date formatter property using a key-value pair.

## Declaration

```swift
func CFDateFormatterSetProperty(_ formatter: CFDateFormatter!, _ key: CFString!, _ value: CFTypeRef!)
```

## Parameters

- `formatter`: The date formatter to modify.
- `key`: The name of the property to set. See [Date Formatter Property Keys](date-formatter-property-keys.md) for a description of possible values for this parameter.
- `value`: The value for `key`. This should be a CFType object corresponding to the specified key.

## See Also

### Configuring a Date Formatter

- [CFDateFormatterSetFormat(\_:\_:)](cfdateformattersetformat%28____%29.md): Sets the format string of the given date formatter to the specified value.

# CFDateFormatterSetProperty (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets a date formatter property using a key-value pair.

## Declaration

```objectivec
extern void CFDateFormatterSetProperty(CFDateFormatterRef formatter, CFStringRef key, CFTypeRef value);
```

## Parameters

- `formatter`: The date formatter to modify.
- `key`: The name of the property to set. See [Date Formatter Property Keys](date-formatter-property-keys.md) for a description of possible values for this parameter.
- `value`: The value for `key`. This should be a CFType object corresponding to the specified key.

## See Also

### Configuring a Date Formatter

- [CFDateFormatterSetFormat](cfdateformattersetformat%28____%29.md): Sets the format string of the given date formatter to the specified value.
