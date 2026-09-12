> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-9e1zn/changestrimmedbytimerange:](https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/changestrimmedbytimerange:)

# changesTrimmedByTimeRange:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Changes trimmed and time range shifted to start at zero.

## Declaration

```objectivec
- (CNScriptChanges *) changesTrimmedByTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: The time range of interest.

<a id="return-value"></a>

## Return Value

Script changes trimmed and time range shifted to start at zero.
