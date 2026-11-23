> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppointofinterest/init(location:title:subtitle:summary:detailtitle:detailsubtitle:detailsummary:pinimage:selectedpinimage:)

# init(location:title:subtitle:summary:detailTitle:detailSubtitle:detailSummary:pinImage:selectedPinImage:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

## Declaration

```swift
init(location: MKMapItem, title: String, subtitle: String?, summary: String?, detailTitle: String?, detailSubtitle: String?, detailSummary: String?, pinImage: UIImage?, selectedPinImage: UIImage?)
```

## See Also

### Creating a point of interest

- [init(location:title:subtitle:summary:detailTitle:detailSubtitle:detailSummary:pinImage:)](init%28location_title_subtitle_summary_detailtitle_detailsubtitle_detailsummary_pinimage_%29.md): Creates a point of interest for a specific location.
- [init(coder:)](init%28coder_%29.md)
- [pinImageSize](pinimagesize.md)
- [selectedPinImageSize](selectedpinimagesize.md)

# initWithLocation:title:subtitle:summary:detailTitle:detailSubtitle:detailSummary:pinImage:selectedPinImage: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

## Declaration

```objectivec
- (instancetype) initWithLocation:(MKMapItem *) location title:(NSString *) title subtitle:(NSString *) subtitle summary:(NSString *) summary detailTitle:(NSString *) detailTitle detailSubtitle:(NSString *) detailSubtitle detailSummary:(NSString *) detailSummary pinImage:(UIImage *) pinImage selectedPinImage:(UIImage *) selectedPinImage;
```

## See Also

### Creating a point of interest

- [initWithLocation:title:subtitle:summary:detailTitle:detailSubtitle:detailSummary:pinImage:](init%28location_title_subtitle_summary_detailtitle_detailsubtitle_detailsummary_pinimage_%29.md): Creates a point of interest for a specific location.
- [pinImageSize](pinimagesize.md)
- [selectedPinImageSize](selectedpinimagesize.md)
