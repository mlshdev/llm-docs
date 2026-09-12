> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatarecord/displayname](https://developer.apple.com/documentation/webkit/wkwebsitedatarecord/displayname)

# displayName (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The display name for the data record.

## Declaration

```swift
var displayName: String { get }
```

<a id="Discussion"></a>

## Discussion

This property contains identifying information that you to display to users. Typically, the value is the website’s domain name and suffix taken from the host information in the resource’s security origin object. For more information, see [WKSecurityOrigin](../wksecurityorigin.md).

# displayName (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The display name for the data record.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * displayName;
```

<a id="Discussion"></a>

## Discussion

This property contains identifying information that you to display to users. Typically, the value is the website’s domain name and suffix taken from the host information in the resource’s security origin object. For more information, see [WKSecurityOrigin](../wksecurityorigin.md).
