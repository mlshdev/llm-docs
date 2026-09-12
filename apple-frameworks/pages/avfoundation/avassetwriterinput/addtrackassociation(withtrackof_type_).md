> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/addtrackassociation(withtrackof:type:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/addtrackassociation(withtrackof:type:))

# addTrackAssociation(withTrackOf:type:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Adds an association between input tracks.

## Declaration

```swift
func addTrackAssociation(withTrackOf input: AVAssetWriterInput, type trackAssociationType: String)
```

## Parameters

- `input`: The input that contains the track to associate with this input’s track.
- `trackAssociationType`: The type of track association to add.

<a id="Discussion"></a>

## Discussion

The system raises an error if the association type requires tracks of a media type that doesn’t match the input’s type, or if the output file type doesn’t support track associations.

You can’t add track associations after writing starts.

## See Also

### Configuring track associations

- [canAddTrackAssociation(withTrackOf:type:)](canaddtrackassociation%28withtrackof_type_%29.md): Determines whether it’s valid to associate another input’s track with this input’s track.

# addTrackAssociationWithTrackOfInput:type: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Adds an association between input tracks.

## Declaration

```objectivec
- (void) addTrackAssociationWithTrackOfInput:(AVAssetWriterInput *) input type:(NSString *) trackAssociationType;
```

## Parameters

- `input`: The input that contains the track to associate with this input’s track.
- `trackAssociationType`: The type of track association to add.

<a id="Discussion"></a>

## Discussion

The system raises an error if the association type requires tracks of a media type that doesn’t match the input’s type, or if the output file type doesn’t support track associations.

You can’t add track associations after writing starts.

## See Also

### Configuring track associations

- [canAddTrackAssociationWithTrackOfInput:type:](canaddtrackassociation%28withtrackof_type_%29.md): Determines whether it’s valid to associate another input’s track with this input’s track.
