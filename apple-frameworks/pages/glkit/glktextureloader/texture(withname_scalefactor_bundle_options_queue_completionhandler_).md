> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloader/texture(withname:scalefactor:bundle:options:queue:completionhandler:)](https://developer.apple.com/documentation/glkit/glktextureloader/texture(withname:scalefactor:bundle:options:queue:completionhandler:))

# texture(withName:scaleFactor:bundle:options:queue:completionHandler:) (Swift)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func texture(withName name: String, scaleFactor: CGFloat, bundle: Bundle?, options: [String : NSNumber]? = nil, queue: dispatch_queue_t?, completionHandler block: @escaping @Sendable (GLKTextureInfo?, (any Error)?) -> Void)
```

```swift
func texture(withName name: String, scaleFactor: CGFloat, bundle: Bundle?, options: [String : NSNumber]? = nil, queue: dispatch_queue_t?) async throws -> GLKTextureInfo
```

# textureWithName:scaleFactor:bundle:options:queue:completionHandler: (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) textureWithName:(NSString *) name scaleFactor:(CGFloat) scaleFactor bundle:(NSBundle *) bundle options:(NSDictionary<NSString *,NSNumber *> *) options queue:(dispatch_queue_t) queue completionHandler:(GLKTextureLoaderCallback) block;
```
