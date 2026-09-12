> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/1515413-png-filter-types](https://developer.apple.com/documentation/accelerate/1515413-png-filter-types)

# PNG Filter Types

**Interface languages:** Swift, Objective-C

**Framework:** Accelerate  
**Kind:** API Collection

Filtering algorithms to apply to image data before compressing the data.

## Topics

### Constants

- [kvImage_PNG_FILTER_VALUE_NONE](kvimage_png_filter_value_none.md): No filtering.
- [kvImage_PNG_FILTER_VALUE_SUB](kvimage_png_filter_value_sub.md): A filter that computes the difference between each byte of a pixel and the value of the corresponding byte of the pixel located to the left.
- [kvImage_PNG_FILTER_VALUE_UP](kvimage_png_filter_value_up.md): A filter that computes the difference between each byte of a pixel and the value of the corresponding byte of the pixel located above.
- [kvImage_PNG_FILTER_VALUE_AVG](kvimage_png_filter_value_avg.md): A filter that predicts a pixel value from the average of the pixels to the left and above the predicted pixel location.
- [kvImage_PNG_FILTER_VALUE_PAETH](kvimage_png_filter_value_paeth.md): A filter that predicts a pixel value by applying a linear function to the pixels located to the left, above, and to the upper-left of the predicted pixel location.
