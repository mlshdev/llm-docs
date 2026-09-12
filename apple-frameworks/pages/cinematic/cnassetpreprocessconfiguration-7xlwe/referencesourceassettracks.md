> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetpreprocessconfiguration-7xlwe/referencesourceassettracks](https://developer.apple.com/documentation/cinematic/cnassetpreprocessconfiguration-7xlwe/referencesourceassettracks)

# referenceSourceAssetTracks

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Controls whether the color track in the output asset reference the source asset or embed a copy of its sample data.

## Declaration

```objectivec
@property BOOL referenceSourceAssetTracks;
```

<a id="discussion"></a>

## Discussion

When YES, the output asset references the color from the source asset. This keeps the intermediate file small, but the output asset will not be portable — it depends on the source asset remaining at its original location.

When NO (the default), the color is copied into the output asset, making it self-contained and portable at the cost of roughly doubling the storage required.

The disparity and metadata tracks are always embedded regardless of this setting.
