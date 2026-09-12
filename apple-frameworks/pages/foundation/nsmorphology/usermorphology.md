> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmorphology/usermorphology](https://developer.apple.com/documentation/foundation/nsmorphology/usermorphology)

# userMorphology

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The addressing preferences of the current user.

## Declaration

```objectivec
@property (class, readonly) NSMorphology * userMorphology;
```

<a id="Discussion"></a>

## Discussion

If the user hasn’t specified preferences, or chose not to share them with this app, the [unspecified](unspecified.md) property is `true`.

This value doesn’t change throughout the lifetime of the process.
