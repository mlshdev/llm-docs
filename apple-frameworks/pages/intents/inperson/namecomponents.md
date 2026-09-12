> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/namecomponents](https://developer.apple.com/documentation/intents/inperson/namecomponents)

# nameComponents (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The individual components of the person’s full name.

## Declaration

```swift
var nameComponents: PersonNameComponents? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the name components specified at initialization time. Use the information in this property or the [displayName](displayname.md) property to identify the name of the user.

## See Also

### Accessing the name

- [displayName](displayname.md): The person’s formatted name.

# nameComponents (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The individual components of the person’s full name.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSPersonNameComponents * nameComponents;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSPersonNameComponents * nameComponents;
```

<a id="Discussion"></a>

## Discussion

This property contains the name components specified at initialization time. Use the information in this property or the [displayName](displayname.md) property to identify the name of the user.

## See Also

### Accessing the name

- [displayName](displayname.md): The person’s formatted name.
