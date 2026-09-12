> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsbinaryitem/init(identifier:title:type:)](https://developer.apple.com/documentation/classkit/clsbinaryitem/init(identifier:title:type:))

# init(identifier:title:type:) (Swift)

**Framework:** ClassKit  
**Kind:** Initializer  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Initializes a new binary activity item of the given type.

## Declaration

```swift
init(identifier: String, title: String, type valueType: CLSBinaryValueType)
```

## Parameters

- `identifier`: A unique identifier for the activity item.
- `title`: A human readable name for the activity item.
- `valueType`: The kind of Boolean that the activity item represents.

## See Also

### Creating Binary Activity Items

- [CLSBinaryValueType](../clsbinaryvaluetype.md): The kinds of outcomes that a binary activity item can represent.

# initWithIdentifier:title:type: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Initializes a new binary activity item of the given type.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier title:(NSString *) title type:(CLSBinaryValueType) valueType;
```

## Parameters

- `identifier`: A unique identifier for the activity item.
- `title`: A human readable name for the activity item.
- `valueType`: The kind of Boolean that the activity item represents.

## See Also

### Creating Binary Activity Items

- [CLSBinaryValueType](../clsbinaryvaluetype.md): The kinds of outcomes that a binary activity item can represent.
