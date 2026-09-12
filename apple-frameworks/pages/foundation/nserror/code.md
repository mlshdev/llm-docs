> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nserror/code](https://developer.apple.com/documentation/foundation/nserror/code)

# code (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The error code.

## Declaration

```swift
var code: Int { get }
```

<a id="Discussion"></a>

## Discussion

Note that errors are domain-specific.

## See Also

### Related Documentation

- [localizedDescription](localizeddescription.md): A string containing the localized description of the error.

### Getting Error Properties

- [domain](domain.md): A string containing the error domain.
- [userInfo](userinfo.md): The user info dictionary.

# code (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The error code.

## Declaration

```objectivec
@property (readonly) NSInteger code;
```

<a id="Discussion"></a>

## Discussion

Note that errors are domain-specific.

## See Also

### Related Documentation

- [localizedDescription](localizeddescription.md): A string containing the localized description of the error.

### Getting Error Properties

- [domain](domain.md): A string containing the error domain.
- [userInfo](userinfo.md): The user info dictionary.
