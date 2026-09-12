> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1429011-csidentityqueryexecuteasynchrono](https://developer.apple.com/documentation/coreservices/1429011-csidentityqueryexecuteasynchrono)

# CSIdentityQueryExecuteAsynchronously(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func CSIdentityQueryExecuteAsynchronously(_ query: CSIdentityQuery!, _ flags: CSIdentityQueryFlags, _ clientContext: UnsafePointer<CSIdentityQueryClientContext>!, _ runLoop: CFRunLoop!, _ runLoopMode: CFString!) -> Bool
```

# CSIdentityQueryExecuteAsynchronously (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
Boolean CSIdentityQueryExecuteAsynchronously(CSIdentityQueryRef query, CSIdentityQueryFlags flags, const CSIdentityQueryClientContext *clientContext, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```
