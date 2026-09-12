> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/canaddtrackassociation(withtrackof:type:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/canaddtrackassociation(withtrackof:type:))

# canAddTrackAssociation(withTrackOf:type:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Determines whether it’s valid to associate another input’s track with this input’s track.

## Declaration

```swift
func canAddTrackAssociation(withTrackOf input: AVAssetWriterInput, type trackAssociationType: String) -> Bool
```

## Parameters

- `input`: An asset writer input that contains the track to associate.
- `trackAssociationType`: The type of track association to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system can make the association between tracks; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if the association type requires tracks of a media type that doesn’t match the input’s type, or if the output file type doesn’t support track associations.

## See Also

### Configuring track associations

- [addTrackAssociation(withTrackOf:type:)](addtrackassociation%28withtrackof_type_%29.md): Adds an association between input tracks.

# canAddTrackAssociationWithTrackOfInput:type: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Determines whether it’s valid to associate another input’s track with this input’s track.

## Declaration

```objectivec
- (BOOL) canAddTrackAssociationWithTrackOfInput:(AVAssetWriterInput *) input type:(NSString *) trackAssociationType;
```

## Parameters

- `input`: An asset writer input that contains the track to associate.
- `trackAssociationType`: The type of track association to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system can make the association between tracks; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if the association type requires tracks of a media type that doesn’t match the input’s type, or if the output file type doesn’t support track associations.

## See Also

### Configuring track associations

- [addTrackAssociationWithTrackOfInput:type:](addtrackassociation%28withtrackof_type_%29.md): Adds an association between input tracks.
