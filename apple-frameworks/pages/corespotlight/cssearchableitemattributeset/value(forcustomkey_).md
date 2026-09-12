> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/value(forcustomkey:)](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/value(forcustomkey:))

# value(forCustomKey:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns the value associated with the specified custom attribute key.

## Declaration

```swift
func value(forCustomKey key: CSCustomAttributeKey) -> (any NSSecureCoding)?
```

## Parameters

- `key`: The custom attribute key.

<a id="return-value"></a>

## Return Value

The value associated with the custom attribute key.

## See Also

### Accessing custom attributes

- [setValue(\_:forCustomKey:)](setvalue%28__forcustomkey_%29.md): Sets the value for a custom attribute key.

# valueForCustomKey: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns the value associated with the specified custom attribute key.

## Declaration

```objectivec
- (id<NSSecureCoding>) valueForCustomKey:(CSCustomAttributeKey *) key;
```

## Parameters

- `key`: The custom attribute key.

<a id="return-value"></a>

## Return Value

The value associated with the custom attribute key.

## See Also

### Accessing custom attributes

- [setValue:forCustomKey:](setvalue%28__forcustomkey_%29.md): Sets the value for a custom attribute key.
