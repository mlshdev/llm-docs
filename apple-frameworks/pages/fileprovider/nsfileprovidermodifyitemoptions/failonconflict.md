> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermodifyitemoptions/failonconflict](https://developer.apple.com/documentation/fileprovider/nsfileprovidermodifyitemoptions/failonconflict)

# failOnConflict (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An option to fail an upload in the event of a version conflict.

## Declaration

```swift
static var failOnConflict: NSFileProviderModifyItemOptions { get }
```

<a id="discussion"></a>

## Discussion

If you adopt this option, and an uploaded item’s base version doesn’t match the version on the server, fail and return [localVersionConflictingWithServer](../nsfileprovidererror/localversionconflictingwithserver.md) (Swift) or [NSFileProviderError.Code.localVersionConflictingWithServer](../nsfileprovidererror/code/localversionconflictingwithserver.md) (Objective-C) in your implementation of `modifyItem`.

To support the fail-on-conflict behavior in your file provider, indicate the support by adding the following key/value pair to the extension’s Info pane.

```
<key>NSExtension</key>
<dict>
    <key>NSExtensionFileProviderSupportsFailingUploadOnConflict</key>
    <true/>
</dict>
```

## See Also

### Choosing Modify Item Options

- [mayAlreadyExist](mayalreadyexist.md): An option that indicates the changes may already exist in your remote storage.

# NSFileProviderModifyItemFailOnConflict (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · visionOS 26.0+

An option to fail an upload in the event of a version conflict.

## Declaration

```objectivec
NSFileProviderModifyItemFailOnConflict
```

<a id="discussion"></a>

## Discussion

If you adopt this option, and an uploaded item’s base version doesn’t match the version on the server, fail and return [localVersionConflictingWithServer](../nsfileprovidererror/localversionconflictingwithserver.md) (Swift) or [NSFileProviderErrorLocalVersionConflictingWithServer](../nsfileprovidererror/code/localversionconflictingwithserver.md) (Objective-C) in your implementation of `modifyItem`.

To support the fail-on-conflict behavior in your file provider, indicate the support by adding the following key/value pair to the extension’s Info pane.

```
<key>NSExtension</key>
<dict>
    <key>NSExtensionFileProviderSupportsFailingUploadOnConflict</key>
    <true/>
</dict>
```

## See Also

### Choosing Modify Item Options

- [NSFileProviderModifyItemMayAlreadyExist](mayalreadyexist.md): An option that indicates the changes may already exist in your remote storage.
