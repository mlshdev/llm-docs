> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/setdefaultapplication(at:toopenurlswithscheme:completion:)](https://developer.apple.com/documentation/appkit/nsworkspace/setdefaultapplication(at:toopenurlswithscheme:completion:))

# setDefaultApplication(at:toOpenURLsWithScheme:completion:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Sets the default app to use when opening files of a specific scheme.

## Declaration

```swift
func setDefaultApplication(at applicationURL: URL, toOpenURLsWithScheme urlScheme: String, completion completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setDefaultApplication(at applicationURL: URL, toOpenURLsWithScheme urlScheme: String) async throws
```

## Parameters

- `applicationURL`: The URL of the default application.
- `urlScheme`: The URL of the scheme to open.
- `completionHandler`: The completion handler to call after the operation completes.

<a id="Discussion"></a>

## Discussion

This method sets the default app to open files of the type specified by the `urlScheme`. If a change requires user consent, the system asks the for consent asynchronously before invoking the completion handler.

## See Also

### Setting Default Application Information

- [setDefaultApplication(at:toOpenFileAt:completion:)](setdefaultapplication%28at_toopenfileat_completion_%29.md): Sets the default app to use when opening a specific file.
- [setDefaultApplication(at:toOpen:completion:)](setdefaultapplication%28at_toopen_completion_%29.md): Sets the default app to use when opening files of a specific content type.
- [setDefaultApplication(at:toOpenContentTypeOfFileAt:completion:)](setdefaultapplication%28at_toopencontenttypeoffileat_completion_%29.md): Sets the default app to use when opening files of a specific content type defined by a file URL.

# setDefaultApplicationAtURL:toOpenURLsWithScheme:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Sets the default app to use when opening files of a specific scheme.

## Declaration

```objectivec
- (void) setDefaultApplicationAtURL:(NSURL *) applicationURL toOpenURLsWithScheme:(NSString *) urlScheme completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `applicationURL`: The URL of the default application.
- `urlScheme`: The URL of the scheme to open.
- `completionHandler`: The completion handler to call after the operation completes.

<a id="Discussion"></a>

## Discussion

This method sets the default app to open files of the type specified by the `urlScheme`. If a change requires user consent, the system asks the for consent asynchronously before invoking the completion handler.

## See Also

### Setting Default Application Information

- [setDefaultApplicationAtURL:toOpenFileAtURL:completionHandler:](setdefaultapplication%28at_toopenfileat_completion_%29.md): Sets the default app to use when opening a specific file.
- [setDefaultApplicationAtURL:toOpenContentType:completionHandler:](setdefaultapplication%28at_toopen_completion_%29.md): Sets the default app to use when opening files of a specific content type.
- [setDefaultApplicationAtURL:toOpenContentTypeOfFileAtURL:completionHandler:](setdefaultapplication%28at_toopencontenttypeoffileat_completion_%29.md): Sets the default app to use when opening files of a specific content type defined by a file URL.
