> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/grantedpermissions](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/grantedpermissions)

# grantedPermissions (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The currently granted permissions and their expiration dates.

## Declaration

```swift
var grantedPermissions: [WKWebExtension.Permission : Date] { get set }
```

<a id="discussion"></a>

## Discussion

Permissions that don’t expire will have a distant future date. This will never include expired entries at time of access.

Setting this property will replace all existing entries. Use this property for saving and restoring permission status in bulk.

Permissions in this dictionary should be explicitly granted by the user before being added. Any permissions in this collection will not be presented for approval again until they expire. This value should be saved and restored as needed by the app.

## See Also

### Related Documentation

- [setPermissionStatus(\_:for:)](setpermissionstatus%28__for_%29-4u95f.md): Sets the status of a permission with a distant future expiration date.
- [setPermissionStatus(\_:for:expirationDate:)](setpermissionstatus%28__for_expirationdate_%29-692ui.md): Sets the status of a permission with a specific expiration date.

# grantedPermissions (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The currently granted permissions and their expiration dates.

## Declaration

```objectivec
@property (nonatomic, copy) NSDictionary<NSString *,NSDate *> * grantedPermissions;
```

<a id="discussion"></a>

## Discussion

Permissions that don’t expire will have a distant future date. This will never include expired entries at time of access.

Setting this property will replace all existing entries. Use this property for saving and restoring permission status in bulk.

Permissions in this dictionary should be explicitly granted by the user before being added. Any permissions in this collection will not be presented for approval again until they expire. This value should be saved and restored as needed by the app.

## See Also

### Related Documentation

- [setPermissionStatus:forPermission:](setpermissionstatus%28__for_%29-4u95f.md): Sets the status of a permission with a distant future expiration date.
- [setPermissionStatus:forPermission:expirationDate:](setpermissionstatus%28__for_expirationdate_%29-692ui.md): Sets the status of a permission with a specific expiration date.
