> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/displayname](https://developer.apple.com/documentation/intents/inperson/displayname)

# displayName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The person’s formatted name.

## Declaration

```swift
var displayName: String { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the name components specified at initialization time. Use the information in this property or the [nameComponents](namecomponents.md) property to identify the name of the user.

## See Also

### Accessing the name

- [nameComponents](namecomponents.md): The individual components of the person’s full name.

# displayName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The person’s formatted name.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * displayName;
```

```objectivec
@property (atomic, copy, readonly) NSString * displayName;
```

<a id="Discussion"></a>

## Discussion

This property contains the name components specified at initialization time. Use the information in this property or the [nameComponents](namecomponents.md) property to identify the name of the user.

## See Also

### Accessing the name

- [nameComponents](namecomponents.md): The individual components of the person’s full name.
