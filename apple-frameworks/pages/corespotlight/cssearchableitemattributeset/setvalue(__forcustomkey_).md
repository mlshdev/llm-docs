> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/setvalue(_:forcustomkey:)](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/setvalue(_:forcustomkey:))

# setValue(\_:forCustomKey:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Sets the value for a custom attribute key.

## Declaration

```swift
func setValue(_ value: (any NSSecureCoding)?, forCustomKey key: CSCustomAttributeKey)
```

## Parameters

- `value`: The value of the custom attribute. Values must be common property list types, such as [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), [NSNull](../../foundation/nsnull.md), [NSData](../../foundation/nsdata.md), or [NSDate](../../foundation/nsdate.md), or an array of property list types.
- `key`: The custom attribute key.

## See Also

### Accessing custom attributes

- [value(forCustomKey:)](value%28forcustomkey_%29.md): Returns the value associated with the specified custom attribute key.

# setValue:forCustomKey: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Sets the value for a custom attribute key.

## Declaration

```objectivec
- (void) setValue:(id<NSSecureCoding>) value forCustomKey:(CSCustomAttributeKey *) key;
```

## Parameters

- `value`: The value of the custom attribute. Values must be common property list types, such as [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), [NSNull](../../foundation/nsnull.md), [NSData](../../foundation/nsdata.md), or [NSDate](../../foundation/nsdate.md), or an array of property list types.
- `key`: The custom attribute key.

## See Also

### Accessing custom attributes

- [valueForCustomKey:](value%28forcustomkey_%29.md): Returns the value associated with the specified custom attribute key.
