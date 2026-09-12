> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/currentpermissions](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/currentpermissions)

# currentPermissions (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The currently granted permissions that have not expired.

## Declaration

```swift
var currentPermissions: Set<WKWebExtension.Permission> { get }
```

## See Also

### Related Documentation

- [grantedPermissions](grantedpermissions.md): The currently granted permissions and their expiration dates.

# currentPermissions (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The currently granted permissions that have not expired.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<NSString *> * currentPermissions;
```

## See Also

### Related Documentation

- [grantedPermissions](grantedpermissions.md): The currently granted permissions and their expiration dates.
