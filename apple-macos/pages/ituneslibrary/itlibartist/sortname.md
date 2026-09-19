> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/ituneslibrary/itlibartist/sortname

# sortName (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The name of the artist to use when sorting.

## Declaration

```swift
var sortName: String? { get }
```

<a id="Discussion"></a>

## Discussion

If `nil`, iTunes uses [name](name.md) to sort by artist name.

## See Also

### Getting Artist Info

- [name](name.md): The name of the artist.
- [persistentID](persistentid.md): The unique identifier of the artist.

# sortName (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The name of the artist to use when sorting.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * sortName;
```

<a id="Discussion"></a>

## Discussion

If `nil`, iTunes uses [name](name.md) to sort by artist name.

## See Also

### Getting Artist Info

- [name](name.md): The name of the artist.
- [persistentID](persistentid.md): The unique identifier of the artist.
