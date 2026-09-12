> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enerrorhandler](https://developer.apple.com/documentation/exposurenotification/enerrorhandler)

# ENErrorHandler (Swift)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The handler for error conditions.

> No longer supported.

## Declaration

```swift
typealias ENErrorHandler = ((any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This type is available in iOS 12.5, and in iOS 13.5 and later.

## See Also

### Errors

- [ENError](enerror.md): Deprecated. Errors that the exposure notification framework issues.
- [ENError.Code](enerror/code.md): Deprecated. Error codes that the exposure notification framework issues.
- [ENErrorDomain](enerrordomain.md): Deprecated. The domain for an error.

# ENErrorHandler (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The handler for error conditions.

> No longer supported.

## Declaration

```objectivec
typedef void (^)(NSError *) ENErrorHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This type is available in iOS 12.5, and in iOS 13.5 and later.

## See Also

### Errors

- [ENErrorCode](enerror/code.md): Deprecated. Error codes that the exposure notification framework issues.
- [ENErrorDomain](enerrordomain.md): Deprecated. The domain for an error.
