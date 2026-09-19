> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/sfspeechlanguagemodel/preparecustomlanguagemodel(for:clientidentifier:configuration:ignorescache:completion:)

# prepareCustomLanguageModel(for:clientIdentifier:configuration:ignoresCache:completion:) (Swift)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 17.0+ (deprecated in 26.0) · iPadOS 17.0+ (deprecated in 26.0) · Mac Catalyst 17.0+ (deprecated in 26.0) · macOS 14.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

## Declaration

```swift
class func prepareCustomLanguageModel(for asset: URL, clientIdentifier: String, configuration: SFSpeechLanguageModel.Configuration, ignoresCache: Bool, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
class func prepareCustomLanguageModel(for asset: URL, clientIdentifier: String, configuration: SFSpeechLanguageModel.Configuration, ignoresCache: Bool) async throws
```

# prepareCustomLanguageModelForUrl:clientIdentifier:configuration:ignoresCache:completion: (Objective-C)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 17.0+ (deprecated in 26.0) · iPadOS 17.0+ (deprecated in 26.0) · Mac Catalyst 17.0+ (deprecated in 26.0) · macOS 14.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

## Declaration

```objectivec
+ (void) prepareCustomLanguageModelForUrl:(NSURL *) asset clientIdentifier:(NSString *) clientIdentifier configuration:(SFSpeechLanguageModelConfiguration *) configuration ignoresCache:(BOOL) ignoresCache completion:(void (^)(NSError *error)) completion;
```
