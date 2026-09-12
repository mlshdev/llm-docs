> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smloginitemsetenabled(_:_:)](https://developer.apple.com/documentation/servicemanagement/smloginitemsetenabled(_:_:))

# SMLoginItemSetEnabled(\_:\_:) (Swift)

**Framework:** Service Management  
**Kind:** Function  
**Availability:** macOS 10.6+ (deprecated in 13.0)

Enables a helper executable in the main app-bundle directory.

> Please use SMAppService instead

## Declaration

```swift
func SMLoginItemSetEnabled(_ identifier: CFString, _ enabled: Bool) -> Bool
```

## Parameters

- `identifier`: The identifier of the helper executable bundle.
- `enabled`: A Boolean value that represents the state of the helper executable. This value is effective only for the currently logged-in user. If [true](https://developer.apple.com/documentation/swift/true), the helper tool executable immediately (and upon subsequent logins) and keeps running. If [false](https://developer.apple.com/documentation/swift/false), the helper executable stops.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the requested change has taken effect.

<a id="Discussion"></a>

## Discussion

> **Important**

>  To enable or disable `LoginItems` in macOS 13 and later, use the [register()](smappservice/register%28%29.md) and [unregister()](smappservice/unregister%28%29.md) methods instead.

The build system places helper executables in the app’s bundle in the `Contents/Library/LoginItems` directory.

# SMLoginItemSetEnabled (Objective-C)

**Framework:** Service Management  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 16.1) · macOS 10.6+ (deprecated in 13.0)

Enables a helper executable in the main app-bundle directory.

> Please use SMAppService instead

## Declaration

```objectivec
extern Boolean SMLoginItemSetEnabled(CFStringRef identifier, Boolean enabled);
```

## Parameters

- `identifier`: The identifier of the helper executable bundle.
- `enabled`: A Boolean value that represents the state of the helper executable. This value is effective only for the currently logged-in user. If [true](https://developer.apple.com/documentation/swift/true), the helper tool executable immediately (and upon subsequent logins) and keeps running. If [false](https://developer.apple.com/documentation/swift/false), the helper executable stops.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the requested change has taken effect.

<a id="Discussion"></a>

## Discussion

> **Important**

>  To enable or disable `LoginItems` in macOS 13 and later, use the [registerAndReturnError:](smappservice/register%28%29.md) and [unregisterAndReturnError:](smappservice/unregister%28%29.md) methods instead.

The build system places helper executables in the app’s bundle in the `Contents/Library/LoginItems` directory.
