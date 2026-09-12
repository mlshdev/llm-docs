> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459526-pmpaperiscustom](https://developer.apple.com/documentation/applicationservices/1459526-pmpaperiscustom)

# PMPaperIsCustom(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether a specified paper is a custom paper.

## Declaration

```swift
func PMPaperIsCustom(_ paper: PMPaper) -> Bool
```

## Parameters

- `paper`: The paper you’re querying to determine whether it’s a custom paper.

<a id="return_value"></a>

## Return Value

If `true`, the specified paper is a custom paper; otherwise, `false`.

<a id="discussion"></a>

## Discussion

You can create a custom paper with the function [PMPaperCreateCustom(\_:\_:\_:\_:\_:\_:\_:)](1459322-pmpapercreatecustom.md).

## See Also

### Creating and Using Paper Objects

- [PMPaperCreateCustom(\_:\_:\_:\_:\_:\_:\_:)](1459322-pmpapercreatecustom.md): Creates a custom paper object.

# PMPaperIsCustom (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Returns a Boolean value indicating whether a specified paper is a custom paper.

## Declaration

```objectivec
Boolean PMPaperIsCustom(PMPaper paper);
```

## Parameters

- `paper`: The paper you’re querying to determine whether it’s a custom paper.

<a id="return_value"></a>

## Return Value

If `true`, the specified paper is a custom paper; otherwise, `false`.

<a id="discussion"></a>

## Discussion

You can create a custom paper with the function [PMPaperCreateCustom](1459322-pmpapercreatecustom.md).

## See Also

### Creating and Using Paper Objects

- [PMPaperCreate](core_printing/1805531-pmpapercreate.md): Deprecated. Creates a paper object.
- [PMPaperCreateCustom](1459322-pmpapercreatecustom.md): Creates a custom paper object.
