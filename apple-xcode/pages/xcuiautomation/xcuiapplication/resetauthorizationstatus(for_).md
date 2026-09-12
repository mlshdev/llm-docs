> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiapplication/resetauthorizationstatus(for:)](https://developer.apple.com/documentation/xcuiautomation/xcuiapplication/resetauthorizationstatus(for:))

# resetAuthorizationStatus(for:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 6.2+ · Xcode 16.3+

Resets the authorization status for a protected resource.

## Declaration

```swift
func resetAuthorizationStatus(for resource: XCUIProtectedResource)
```

## Parameters

- `resource`: A system resource that requires user authorization to access.

## See Also

### Resetting authorization status

- [XCUIProtectedResource](../xcuiprotectedresource.md): A system resource that requires user authorization to access.

# resetAuthorizationStatusForResource: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 6.2+ · Xcode 16.3+

Resets the authorization status for a protected resource.

## Declaration

```objectivec
- (void) resetAuthorizationStatusForResource:(XCUIProtectedResource) resource;
```

## Parameters

- `resource`: A system resource that requires user authorization to access.

## See Also

### Resetting authorization status

- [XCUIProtectedResource](../xcuiprotectedresource.md): A system resource that requires user authorization to access.
