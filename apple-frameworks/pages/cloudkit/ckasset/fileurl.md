> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckasset/fileurl](https://developer.apple.com/documentation/cloudkit/ckasset/fileurl)

# fileURL (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The URL for accessing the asset.

## Declaration

```swift
var fileURL: URL? { get }
```

<a id="discussion"></a>

## Discussion

After you create an asset, use the URL in this property to access the asset’s contents. The URL in this property is different from the one you specify when creating the asset.

> **Note**

> If a modify operation fails with a [serverRecordChanged](../ckerror/serverrecordchanged.md) error, CloudKit doesn’t download assets for the copy of the server’s record that’s accessible using the error’s [serverRecord](../ckerror/serverrecord.md) property. In this scenario, [fileURL](fileurl.md) is `nil` for all of that record’s asset fields.

# fileURL (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The URL for accessing the asset.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * fileURL;
```

<a id="discussion"></a>

## Discussion

After you create an asset, use the URL in this property to access the asset’s contents. The URL in this property is different from the one you specify when creating the asset.

> **Note**

> If a modify operation fails with a [serverRecordChanged](../ckerror/serverrecordchanged.md) error, CloudKit doesn’t download assets for the copy of the server’s record that’s accessible using the error’s [serverRecord](../ckerror/serverrecord.md) property. In this scenario, [fileURL](fileurl.md) is `nil` for all of that record’s asset fields.
