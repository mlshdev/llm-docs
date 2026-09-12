> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplatedetailsheader/maximumactionbuttoncount](https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/maximumactionbuttoncount)

# maximumActionButtonCount (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The maximum number of action buttons that can be displayed in the header.

## Declaration

```swift
class var maximumActionButtonCount: Int { get }
```

<a id="return-value"></a>

## Return Value

The maximum number of action buttons supported by this header type.

<a id="discussion"></a>

## Discussion

This class property defines the upper limit for action buttons to ensure proper layout and usability within the CarPlay interface constraints. Any buttons beyond this limit in the actionButtons array will be ignored.

# maximumActionButtonCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

The maximum number of action buttons that can be displayed in the header.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSInteger maximumActionButtonCount;
```

<a id="return-value"></a>

## Return Value

The maximum number of action buttons supported by this header type.

<a id="discussion"></a>

## Discussion

This class property defines the upper limit for action buttons to ensure proper layout and usability within the CarPlay interface constraints. Any buttons beyond this limit in the actionButtons array will be ignored.
