> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/setdefaultapplication(at:toopencontenttypeoffileat:completion:)](https://developer.apple.com/documentation/appkit/nsworkspace/setdefaultapplication(at:toopencontenttypeoffileat:completion:))

# setDefaultApplication(at:toOpenContentTypeOfFileAt:completion:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Sets the default app to use when opening files of a specific content type defined by a file URL.

## Declaration

```swift
func setDefaultApplication(at applicationURL: URL, toOpenContentTypeOfFileAt url: URL, completion completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setDefaultApplication(at applicationURL: URL, toOpenContentTypeOfFileAt url: URL) async throws
```

## Parameters

- `applicationURL`: The URL of the default application.
- `url`: The URL of the file specifying the content type to open.
- `completionHandler`: The completion handler to call after the operation completes.

<a id="Discussion"></a>

## Discussion

This method sets the default app to open files of the type specified by the file `url`. If a change requires user consent, the system asks the user for consent asynchronously before invoking the completion handler.

## See Also

### Setting Default Application Information

- [setDefaultApplication(at:toOpenFileAt:completion:)](setdefaultapplication%28at_toopenfileat_completion_%29.md): Sets the default app to use when opening a specific file.
- [setDefaultApplication(at:toOpen:completion:)](setdefaultapplication%28at_toopen_completion_%29.md): Sets the default app to use when opening files of a specific content type.
- [setDefaultApplication(at:toOpenURLsWithScheme:completion:)](setdefaultapplication%28at_toopenurlswithscheme_completion_%29.md): Sets the default app to use when opening files of a specific scheme.

# setDefaultApplicationAtURL:toOpenContentTypeOfFileAtURL:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Sets the default app to use when opening files of a specific content type defined by a file URL.

## Declaration

```objectivec
- (void) setDefaultApplicationAtURL:(NSURL *) applicationURL toOpenContentTypeOfFileAtURL:(NSURL *) url completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `applicationURL`: The URL of the default application.
- `url`: The URL of the file specifying the content type to open.
- `completionHandler`: The completion handler to call after the operation completes.

<a id="Discussion"></a>

## Discussion

This method sets the default app to open files of the type specified by the file `url`. If a change requires user consent, the system asks the user for consent asynchronously before invoking the completion handler.

## See Also

### Setting Default Application Information

- [setDefaultApplicationAtURL:toOpenFileAtURL:completionHandler:](setdefaultapplication%28at_toopenfileat_completion_%29.md): Sets the default app to use when opening a specific file.
- [setDefaultApplicationAtURL:toOpenContentType:completionHandler:](setdefaultapplication%28at_toopen_completion_%29.md): Sets the default app to use when opening files of a specific content type.
- [setDefaultApplicationAtURL:toOpenURLsWithScheme:completionHandler:](setdefaultapplication%28at_toopenurlswithscheme_completion_%29.md): Sets the default app to use when opening files of a specific scheme.
