> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessionerrordomain](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessionerrordomain)

# WKExtendedRuntimeSessionErrorDomain (Swift)

**Framework:** WatchKit  
**Kind:** Global Variable  
**Availability:** watchOS 6.0+

The domain for errors reported by extended runtime sessions.

## Declaration

```swift
let WKExtendedRuntimeSessionErrorDomain: String
```

<a id="Discussion"></a>

## Discussion

The session passes these errors to the session delegate’s [extendedRuntimeSession(\_:didInvalidateWith:error:)](wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md) method.

## See Also

### Handling Errors

- [WKExtendedRuntimeSessionErrorCode](wkextendedruntimesessionerrorcode.md): The error codes reported by extended runtime sessions.

# WKExtendedRuntimeSessionErrorDomain (Objective-C)

**Framework:** WatchKit  
**Kind:** Global Variable  
**Availability:** watchOS 6.0+

The domain for errors reported by extended runtime sessions.

## Declaration

```objectivec
extern NSString * const WKExtendedRuntimeSessionErrorDomain;
```

<a id="Discussion"></a>

## Discussion

The session passes these errors to the session delegate’s [extendedRuntimeSession:didInvalidateWithReason:error:](wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md) method.

## See Also

### Handling Errors

- [WKExtendedRuntimeSessionErrorCode](wkextendedruntimesessionerrorcode.md): The error codes reported by extended runtime sessions.
