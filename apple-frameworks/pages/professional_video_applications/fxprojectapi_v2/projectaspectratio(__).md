> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxprojectapi_v2/projectaspectratio(_:)](https://developer.apple.com/documentation/professional_video_applications/fxprojectapi_v2/projectaspectratio(_:))

# projectAspectRatio(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.2.9+

Provides the aspect ratio of the host’s project.

## Declaration

```swift
func projectAspectRatio(_ aspectRatio: UnsafeMutablePointer<Float>!) throws
```

## Parameters

- `aspectRatio`: A float value representing the project aspect ratio.

<a id="discussion"></a>

## Discussion

Use this method to get the aspect ratio of the current project. The clip that the user applies your plug-in to may not be the same aspect ratio as the project or sequence it’s a part of.

> **Note**

>  This method returns the document space aspect ratio, meaning the aspect ratio the project is displayed at after any non-square pixels or fields are accounted for. For example, a NTSC standard definition DV project that’s `720 x 480` with `10:11` pixel aspect ratio returns `(720 * 10/11) / 480 = ~1.36363636...` as the aspect ratio, not `1.5`.

# projectAspectRatio:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides the aspect ratio of the host’s project.

## Declaration

```objectivec
- (BOOL) projectAspectRatio:(float *) aspectRatio error:(NSError * *) error;
```

## Parameters

- `aspectRatio`: A float value representing the project aspect ratio.
- `error`: Returns information about what went wrong upon failure.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="discussion"></a>

## Discussion

Use this method to get the aspect ratio of the current project. The clip that the user applies your plug-in to may not be the same aspect ratio as the project or sequence it’s a part of.

> **Note**

>  This method returns the document space aspect ratio, meaning the aspect ratio the project is displayed at after any non-square pixels or fields are accounted for. For example, a NTSC standard definition DV project that’s `720 x 480` with `10:11` pixel aspect ratio returns `(720 * 10/11) / 480 = ~1.36363636...` as the aspect ratio, not `1.5`.
