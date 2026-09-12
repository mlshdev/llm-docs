> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nserror/userinfo](https://developer.apple.com/documentation/foundation/nserror/userinfo)

# userInfo (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user info dictionary.

## Declaration

```swift
var userInfo: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

If the user info dictionary has not been set, this property is `nil`.

On macOS 10.8 or later, if the user info dictionary has not been set, this property returns an empty dictionary.

## See Also

### Related Documentation

- [localizedDescription](localizeddescription.md): A string containing the localized description of the error.

### Getting Error Properties

- [code](code.md): The error code.
- [domain](domain.md): A string containing the error domain.

# userInfo (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user info dictionary.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * userInfo;
```

<a id="Discussion"></a>

## Discussion

If the user info dictionary has not been set, this property is `nil`.

On macOS 10.8 or later, if the user info dictionary has not been set, this property returns an empty dictionary.

## See Also

### Related Documentation

- [localizedDescription](localizeddescription.md): A string containing the localized description of the error.

### Getting Error Properties

- [code](code.md): The error code.
- [domain](domain.md): A string containing the error domain.
