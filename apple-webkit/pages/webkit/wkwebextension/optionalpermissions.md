> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/optionalpermissions](https://developer.apple.com/documentation/webkit/wkwebextension/optionalpermissions)

# optionalPermissions (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The set of permissions that the extension may need for optional functionality.

## Declaration

```swift
var optionalPermissions: Set<WKWebExtension.Permission> { get }
```

<a id="discussion"></a>

## Discussion

These permissions can be requested by the extension at a later time.

# optionalPermissions (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The set of permissions that the extension may need for optional functionality.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<NSString *> * optionalPermissions;
```

<a id="discussion"></a>

## Discussion

These permissions can be requested by the extension at a later time.
