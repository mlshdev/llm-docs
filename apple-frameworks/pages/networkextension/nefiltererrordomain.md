> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltererrordomain](https://developer.apple.com/documentation/networkextension/nefiltererrordomain)

# NEFilterErrorDomain (Swift)

**Framework:** Network Extension  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The domain for errors resulting from calls to the filter manager.

## Declaration

```swift
let NEFilterErrorDomain: String
```

<a id="Discussion"></a>

## Discussion

Match this constant to the [domain](../foundation/nserror/domain.md) of an [NSError](../foundation/nserror.md) encountered when calling methods on [NEFilterManager](nefiltermanager.md). The [NEFilterManagerError](nefiltermanagererror.md) enumeration defines possible [code](../foundation/nserror/code.md) values for these errors.

## See Also

### Errors

- [NEFilterManagerError](nefiltermanagererror.md): Error codes specific to filter managers.

# NEFilterErrorDomain (Objective-C)

**Framework:** Network Extension  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The domain for errors resulting from calls to the filter manager.

## Declaration

```objectivec
extern NSString * const NEFilterErrorDomain;
```

<a id="Discussion"></a>

## Discussion

Match this constant to the [domain](../foundation/nserror/domain.md) of an [NSError](../foundation/nserror.md) encountered when calling methods on [NEFilterManager](nefiltermanager.md). The [NEFilterManagerError](nefiltermanagererror.md) enumeration defines possible [code](../foundation/nserror/code.md) values for these errors.

## See Also

### Errors

- [NEFilterManagerError](nefiltermanagererror.md): Error codes specific to filter managers.
