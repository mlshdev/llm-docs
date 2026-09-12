> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/setdefaultapplication(at:toopen:completion:)](https://developer.apple.com/documentation/appkit/nsworkspace/setdefaultapplication(at:toopen:completion:))

# setDefaultApplication(at:toOpen:completion:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Sets the default app to use when opening files of a specific content type.

## Declaration

```swift
func setDefaultApplication(at applicationURL: URL, toOpen contentType: UTType, completion completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setDefaultApplication(at applicationURL: URL, toOpen contentType: UTType) async throws
```

## Parameters

- `applicationURL`: The URL of the default application.
- `contentType`: The content type to open.
- `completionHandler`: The completion handler to call after the operation completes.

<a id="Discussion"></a>

## Discussion

This method sets the default app to open for files of the specified `contentType`. If a change requires user consent, the system asks the user for consent asynchronously before invoking the completion handler.

## See Also

### Setting Default Application Information

- [setDefaultApplication(at:toOpenFileAt:completion:)](setdefaultapplication%28at_toopenfileat_completion_%29.md): Sets the default app to use when opening a specific file.
- [setDefaultApplication(at:toOpenContentTypeOfFileAt:completion:)](setdefaultapplication%28at_toopencontenttypeoffileat_completion_%29.md): Sets the default app to use when opening files of a specific content type defined by a file URL.
- [setDefaultApplication(at:toOpenURLsWithScheme:completion:)](setdefaultapplication%28at_toopenurlswithscheme_completion_%29.md): Sets the default app to use when opening files of a specific scheme.

# setDefaultApplicationAtURL:toOpenContentType:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Sets the default app to use when opening files of a specific content type.

## Declaration

```objectivec
- (void) setDefaultApplicationAtURL:(NSURL *) applicationURL toOpenContentType:(UTType *) contentType completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `applicationURL`: The URL of the default application.
- `contentType`: The content type to open.
- `completionHandler`: The completion handler to call after the operation completes.

<a id="Discussion"></a>

## Discussion

This method sets the default app to open for files of the specified `contentType`. If a change requires user consent, the system asks the user for consent asynchronously before invoking the completion handler.

## See Also

### Setting Default Application Information

- [setDefaultApplicationAtURL:toOpenFileAtURL:completionHandler:](setdefaultapplication%28at_toopenfileat_completion_%29.md): Sets the default app to use when opening a specific file.
- [setDefaultApplicationAtURL:toOpenContentTypeOfFileAtURL:completionHandler:](setdefaultapplication%28at_toopencontenttypeoffileat_completion_%29.md): Sets the default app to use when opening files of a specific content type defined by a file URL.
- [setDefaultApplicationAtURL:toOpenURLsWithScheme:completionHandler:](setdefaultapplication%28at_toopenurlswithscheme_completion_%29.md): Sets the default app to use when opening files of a specific scheme.
