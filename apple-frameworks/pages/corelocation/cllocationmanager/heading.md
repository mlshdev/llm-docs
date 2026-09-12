> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/heading](https://developer.apple.com/documentation/corelocation/cllocationmanager/heading)

# heading (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The most recently reported heading.

## Declaration

```swift
@NSCopying var heading: CLHeading? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if heading updates have never been initiated.

## See Also

### Getting recent location and heading data

- [location](location.md): The most recently retrieved user location.

# heading (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

The most recently reported heading.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CLHeading * heading;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if heading updates have never been initiated.

## See Also

### Getting recent location and heading data

- [location](location.md): The most recently retrieved user location.
