> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursordependencyinfo/init(sampleindicateswhetherithasdependentsamples:samplehasdependentsamples:sampleindicateswhetheritdependsonothers:sampledependsonothers:sampleindicateswhetherithasredundantcoding:samplehasredundantcoding:)](https://developer.apple.com/documentation/avfoundation/avsamplecursordependencyinfo/init(sampleindicateswhetherithasdependentsamples:samplehasdependentsamples:sampleindicateswhetheritdependsonothers:sampledependsonothers:sampleindicateswhetherithasredundantcoding:samplehasredundantcoding:))

# init(sampleIndicatesWhetherItHasDependentSamples:sampleHasDependentSamples:sampleIndicatesWhetherItDependsOnOthers:sampleDependsOnOthers:sampleIndicatesWhetherItHasRedundantCoding:sampleHasRedundantCoding:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a sample cursor dependency information structure with sample information.

## Declaration

```swift
init(sampleIndicatesWhetherItHasDependentSamples: ObjCBool, sampleHasDependentSamples: ObjCBool, sampleIndicatesWhetherItDependsOnOthers: ObjCBool, sampleDependsOnOthers: ObjCBool, sampleIndicatesWhetherItHasRedundantCoding: ObjCBool, sampleHasRedundantCoding: ObjCBool)
```

## Parameters

- `sampleIndicatesWhetherItHasDependentSamples`: A Boolean value that determines whether the sample indicates if other samples depend on it.
- `sampleHasDependentSamples`: A Boolean value that determines whether the sample has dependent samples.
- `sampleIndicatesWhetherItDependsOnOthers`: A Boolean value that determines whether the sample indicates that it depends on other samples.
- `sampleDependsOnOthers`: A Boolean value that determines whether the sample depends on other samples.
- `sampleIndicatesWhetherItHasRedundantCoding`: A Boolean value that determines whether the sample indicates that it has redundant coding.
- `sampleHasRedundantCoding`: A Boolean value that determines whether the sample has redundant coding.
