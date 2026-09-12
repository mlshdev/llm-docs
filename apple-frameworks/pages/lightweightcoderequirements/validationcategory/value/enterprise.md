> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/validationcategory/value/enterprise](https://developer.apple.com/documentation/lightweightcoderequirements/validationcategory/value/enterprise)

# enterprise

**Framework:** LightweightCodeRequirements  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Indicates that the code is signed by an Apple issued distribution certificate and allowed to run via Provisioning profile.

## Declaration

```swift
static let enterprise: ValidationCategory.Value
```

<a id="discussion"></a>

## Discussion

This category will match on iOS, watchOS, tvOS, and  visionOS apps. On macOS this category will only match on iOS on macOS apps.
