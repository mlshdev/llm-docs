> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterchannel/getprogramguide(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterchannel/getprogramguide(with:completion:))

# getProgramGuide(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command GetProgramGuide

## Declaration

```swift
func getProgramGuide(with params: MTRChannelClusterGetProgramGuideParams?, completion: @escaping @Sendable (MTRChannelClusterProgramGuideResponseParams?, (any Error)?) -> Void)
```

```swift
func programGuide(with params: MTRChannelClusterGetProgramGuideParams?) async throws -> MTRChannelClusterProgramGuideResponseParams
```

<a id="discussion"></a>

## Discussion

This command retrieves the program guide. It accepts several filter parameters to return specific schedule and program information from a content app. The command shall receive in response a ProgramGuideResponse.

# getProgramGuideWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command GetProgramGuide

## Declaration

```objectivec
- (void) getProgramGuideWithParams:(MTRChannelClusterGetProgramGuideParams *) params completion:(void (^)(MTRChannelClusterProgramGuideResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command retrieves the program guide. It accepts several filter parameters to return specific schedule and program information from a content app. The command shall receive in response a ProgramGuideResponse.
