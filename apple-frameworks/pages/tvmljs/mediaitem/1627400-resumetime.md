> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/mediaitem/1627400-resumetime](https://developer.apple.com/documentation/tvmljs/mediaitem/1627400-resumetime)

# resumeTime

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The number of seconds from the beginning of the item at which the item begins playing.

## Declaration

```
attribute int resumeTime;
```

<a id="discussion"></a>

## Discussion

Use this property to begin playing a media item at a time other than at the beginning of the item. If this property contains anything other than 0, the player displays “Resume” instead of “Play from beginning” on playback.

## See Also

### Setting Timing Options

- [highlightGroups](1627413-highlightgroups.md): An array of highlight groups, with each group containing a list of highlights.
- [interstitials](1627341-interstitials.md): An array of `interstitial` objects.
