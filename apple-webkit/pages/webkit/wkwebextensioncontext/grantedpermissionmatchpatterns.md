> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/grantedpermissionmatchpatterns](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/grantedpermissionmatchpatterns)

# grantedPermissionMatchPatterns (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The currently granted permission match patterns and their expiration dates.

## Declaration

```swift
var grantedPermissionMatchPatterns: [WKWebExtension.MatchPattern : Date] { get set }
```

<a id="discussion"></a>

## Discussion

Match patterns that don’t expire will have a distant future date. This will never include expired entries at time of access.

Setting this property will replace all existing entries. Use this property for saving and restoring permission status in bulk.

Match patterns in this dictionary should be explicitly granted by the user before being added. Any match pattern in this collection will not be presented for approval again until they expire. This value should be saved and restored as needed by the app.

## See Also

### Related Documentation

- [setPermissionStatus(\_:for:)](setpermissionstatus%28__for_%29-6auqv.md): Sets the status of a match pattern with a distant future expiration date.
- [setPermissionStatus(\_:for:expirationDate:)](setpermissionstatus%28__for_expirationdate_%29-7038f.md): Sets the status of a match pattern with a specific expiration date.

# grantedPermissionMatchPatterns (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The currently granted permission match patterns and their expiration dates.

## Declaration

```objectivec
@property (nonatomic, copy) NSDictionary<WKWebExtensionMatchPattern *,NSDate *> * grantedPermissionMatchPatterns;
```

<a id="discussion"></a>

## Discussion

Match patterns that don’t expire will have a distant future date. This will never include expired entries at time of access.

Setting this property will replace all existing entries. Use this property for saving and restoring permission status in bulk.

Match patterns in this dictionary should be explicitly granted by the user before being added. Any match pattern in this collection will not be presented for approval again until they expire. This value should be saved and restored as needed by the app.

## See Also

### Related Documentation

- [setPermissionStatus:forMatchPattern:](setpermissionstatus%28__for_%29-6auqv.md): Sets the status of a match pattern with a distant future expiration date.
- [setPermissionStatus:forMatchPattern:expirationDate:](setpermissionstatus%28__for_expirationdate_%29-7038f.md): Sets the status of a match pattern with a specific expiration date.
