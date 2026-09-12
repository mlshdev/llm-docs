> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/color_parameter_atom/transfer_function_index](https://developer.apple.com/documentation/quicktime-file-format/color_parameter_atom/transfer_function_index)

# Transfer function index

**Framework:** QuickTime File Format  
**Kind:** Data field

A 16-bit unsigned integer containing an index into a table specifying the nonlinear transfer function coefficients used to translate between RGB color space values and Y´CbCr values.

<a id="Overview"></a>

## Overview

The table of transfer function coefficients specifies the nonlinear function coefficients used to translate between the stored Y´CbCr values and a video capture or display system.

## See Also

### Data fields

- [Size](size.md): An unsigned 32-bit integer holding the size of the color parameter atom.
- [Type](type.md): An unsigned 32-bit field.
- [Color parameter type](color_parameter_type.md): A 32-bit field containing a four-character code for the color parameter type.
- [Primaries index](primaries_index.md): A 16-bit unsigned integer containing an index into a table specifying the CIE 1931 xy chromaticity coordinates of the white point and the red, green, and blue primaries.
- [Matrix index](matrix_index.md): A 16-bit unsigned integer containing an index into a table specifying the transformation matrix coefficients used to translate between RGB color space values and Y´CbCr values.
