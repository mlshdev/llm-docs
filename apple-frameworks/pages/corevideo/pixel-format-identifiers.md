> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/pixel-format-identifiers](https://developer.apple.com/documentation/corevideo/pixel-format-identifiers)

# Pixel Format Identifiers

**Framework:** Core Video  
**Kind:** API Collection

Core Video does not provide support for all of these formats; this list defines only their names.

## Topics

### Constants

- [kCVPixelFormatType_1Monochrome](kcvpixelformattype_1monochrome.md): 1 bit indexed.
- [kCVPixelFormatType_2Indexed](kcvpixelformattype_2indexed.md): 2-bit indexed.
- [kCVPixelFormatType_4Indexed](kcvpixelformattype_4indexed.md): 4-bit indexed.
- [kCVPixelFormatType_8Indexed](kcvpixelformattype_8indexed.md): 8-bit indexed.
- [kCVPixelFormatType_1IndexedGray_WhiteIsZero](kcvpixelformattype_1indexedgray_whiteiszero.md): 1 bit indexed gray, white is zero.
- [kCVPixelFormatType_2IndexedGray_WhiteIsZero](kcvpixelformattype_2indexedgray_whiteiszero.md): 2-bit indexed gray, white is zero.
- [kCVPixelFormatType_4IndexedGray_WhiteIsZero](kcvpixelformattype_4indexedgray_whiteiszero.md): 4-bit indexed gray, white is zero.
- [kCVPixelFormatType_8IndexedGray_WhiteIsZero](kcvpixelformattype_8indexedgray_whiteiszero.md): 8-bit indexed gray, white is zero.
- [kCVPixelFormatType_16BE555](kcvpixelformattype_16be555.md): 16-bit BE RGB 555.
- [kCVPixelFormatType_16LE555](kcvpixelformattype_16le555.md): 16-bit LE RGB 555.
- [kCVPixelFormatType_16LE5551](kcvpixelformattype_16le5551.md): 16-bit LE RGB 5551.
- [kCVPixelFormatType_16BE565](kcvpixelformattype_16be565.md): 16-bit BE RGB 565.
- [kCVPixelFormatType_16LE565](kcvpixelformattype_16le565.md): 16-bit LE RGB 565.
- [kCVPixelFormatType_24RGB](kcvpixelformattype_24rgb.md): 24-bit RGB.
- [kCVPixelFormatType_24BGR](kcvpixelformattype_24bgr.md): 24-bit BGR.
- [kCVPixelFormatType_32ARGB](kcvpixelformattype_32argb.md): 32-bit ARGB.
- [kCVPixelFormatType_32BGRA](kcvpixelformattype_32bgra.md): 32-bit BGRA.
- [kCVPixelFormatType_32ABGR](kcvpixelformattype_32abgr.md): 32-bit ABGR.
- [kCVPixelFormatType_32RGBA](kcvpixelformattype_32rgba.md): 32-bit RGBA.
- [kCVPixelFormatType_64ARGB](kcvpixelformattype_64argb.md): 64-bit ARGB, 16-bit big-endian samples.
- [kCVPixelFormatType_48RGB](kcvpixelformattype_48rgb.md): 48-bit RGB, 16-bit big-endian samples.
- [kCVPixelFormatType_32AlphaGray](kcvpixelformattype_32alphagray.md): 32-bit AlphaGray, 16-bit big-endian samples, black is zero.
- [kCVPixelFormatType_16Gray](kcvpixelformattype_16gray.md): 16-bit Grayscale, 16-bit big-endian samples, black is zero.
- [kCVPixelFormatType_30RGB](kcvpixelformattype_30rgb.md): 30-bit RGB, 10-bit big-endian samples, 2 unused padding bits (at least significant end).
- [kCVPixelFormatType_422YpCbCr8](kcvpixelformattype_422ypcbcr8.md): Component Y’CbCr 8-bit 4:2:2, ordered Cb Y’0 Cr Y’1.
- [kCVPixelFormatType_4444YpCbCrA8](kcvpixelformattype_4444ypcbcra8.md): Component Y’CbCrA 8-bit 4:4:4:4, ordered Cb Y’ Cr A.
- [kCVPixelFormatType_4444YpCbCrA8R](kcvpixelformattype_4444ypcbcra8r.md): Component Y’CbCrA 8-bit 4:4:4:4, rendering format. Full range alpha, zero biased YUV, ordered A Y’ Cb Cr.
- [kCVPixelFormatType_4444AYpCbCr8](kcvpixelformattype_4444aypcbcr8.md): Component Y’CbCrA 8-bit 4:4:4:4, ordered A Y’ Cb Cr, full range alpha, video range Y’CbCr.
- [kCVPixelFormatType_4444AYpCbCr16](kcvpixelformattype_4444aypcbcr16.md): Component Y’CbCrA 16-bit 4:4:4:4, ordered A Y’ Cb Cr, full range alpha, video range Y’CbCr, 16-bit little-endian samples.
- [kCVPixelFormatType_444YpCbCr8](kcvpixelformattype_444ypcbcr8.md): Component Y’CbCr 8-bit 4:4:4.
- [kCVPixelFormatType_422YpCbCr16](kcvpixelformattype_422ypcbcr16.md): Component Y’CbCr 10,12,14,16-bit 4:2:2.
- [kCVPixelFormatType_422YpCbCr10](kcvpixelformattype_422ypcbcr10.md): Component Y’CbCr 10-bit 4:2:2.
- [kCVPixelFormatType_444YpCbCr10](kcvpixelformattype_444ypcbcr10.md): Component Y’CbCr 10-bit 4:4:4.
- [kCVPixelFormatType_420YpCbCr8Planar](kcvpixelformattype_420ypcbcr8planar.md): Planar Component Y’CbCr 8-bit 4:2:0. `baseAddr` points to a big-endian `CVPlanarPixelBufferInfo_YCbCrPlanar` struct.
- [kCVPixelFormatType_420YpCbCr8PlanarFullRange](kcvpixelformattype_420ypcbcr8planarfullrange.md): Planar Component Y’CbCr 8-bit 4:2:0, full range. `baseAddr` points to a big-endian `CVPlanarPixelBufferInfo_YCbCrPlanar` struct.
- [kCVPixelFormatType_422YpCbCr_4A_8BiPlanar](kcvpixelformattype_422ypcbcr_4a_8biplanar.md): First plane: Video-range Component Y’CbCr 8-bit 4:2:2, ordered Cb Y’0 Cr Y’1; second plane: alpha 8-bit 0-255.
- [kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange](kcvpixelformattype_420ypcbcr8biplanarvideorange.md): Bi-Planar Component Y’CbCr 8-bit 4:2:0, video-range (luma=\[16,235\] chroma=\[16,240\]). `baseAddr` points to a big-endian `CVPlanarPixelBufferInfo_YCbCrBiPlanar` struct.
- [kCVPixelFormatType_420YpCbCr8BiPlanarFullRange](kcvpixelformattype_420ypcbcr8biplanarfullrange.md): Bi-Planar Component Y’CbCr 8-bit 4:2:0, full-range (luma=\[0,255\] chroma=\[1,255\]). `baseAddr` points to a big-endian `CVPlanarPixelBufferInfo_YCbCrBiPlanar` struct.
- [kCVPixelFormatType_422YpCbCr8_yuvs](kcvpixelformattype_422ypcbcr8_yuvs.md): Component Y’CbCr 8-bit 4:2:2, ordered Y’0 Cb Y’1 Cr.
- [kCVPixelFormatType_422YpCbCr8FullRange](kcvpixelformattype_422ypcbcr8fullrange.md): Component Y’CbCr 8-bit 4:2:2, full range, ordered Y’0 Cb Y’1 Cr.
- [kCVPixelFormatType_OneComponent8](kcvpixelformattype_onecomponent8.md): 8-bit one component, black is zero.
- [kCVPixelFormatType_TwoComponent8](kcvpixelformattype_twocomponent8.md): 8-bit two component, black is zero.
- [kCVPixelFormatType_OneComponent16Half](kcvpixelformattype_onecomponent16half.md): 6-bit one component IEEE half-precision float, 16-bit little-endian samples.
- [kCVPixelFormatType_OneComponent32Float](kcvpixelformattype_onecomponent32float.md): 32-bit one component IEEE float, 32-bit little-endian samples.
- [kCVPixelFormatType_TwoComponent16Half](kcvpixelformattype_twocomponent16half.md): 16-bit two component IEEE half-precision float, 16-bit little-endian samples.
- [kCVPixelFormatType_TwoComponent32Float](kcvpixelformattype_twocomponent32float.md): 32-bit two component IEEE float, 32-bit little-endian samples.
- [kCVPixelFormatType_64RGBAHalf](kcvpixelformattype_64rgbahalf.md): 64-bit RGBA IEEE half-precision float, 16-bit little-endian samples.
- [kCVPixelFormatType_128RGBAFloat](kcvpixelformattype_128rgbafloat.md): 128-bit RGBA IEEE float, 32-bit little-endian samples.
- [kCVPixelFormatType_14Bayer_BGGR](kcvpixelformattype_14bayer_bggr.md)
- [kCVPixelFormatType_14Bayer_GBRG](kcvpixelformattype_14bayer_gbrg.md)
- [kCVPixelFormatType_14Bayer_GRBG](kcvpixelformattype_14bayer_grbg.md)
- [kCVPixelFormatType_14Bayer_RGGB](kcvpixelformattype_14bayer_rggb.md)
- [kCVPixelFormatType_30RGBLEPackedWideGamut](kcvpixelformattype_30rgblepackedwidegamut.md)
- [kCVPixelFormatType_ARGB2101010LEPacked](kcvpixelformattype_argb2101010lepacked.md)
- [kCVPixelFormatType_420YpCbCr10BiPlanarFullRange](kcvpixelformattype_420ypcbcr10biplanarfullrange.md)
- [kCVPixelFormatType_420YpCbCr10BiPlanarVideoRange](kcvpixelformattype_420ypcbcr10biplanarvideorange.md)
- [kCVPixelFormatType_422YpCbCr10BiPlanarFullRange](kcvpixelformattype_422ypcbcr10biplanarfullrange.md)
- [kCVPixelFormatType_422YpCbCr10BiPlanarVideoRange](kcvpixelformattype_422ypcbcr10biplanarvideorange.md)
- [kCVPixelFormatType_444YpCbCr10BiPlanarFullRange](kcvpixelformattype_444ypcbcr10biplanarfullrange.md)
- [kCVPixelFormatType_444YpCbCr10BiPlanarVideoRange](kcvpixelformattype_444ypcbcr10biplanarvideorange.md)
- [kCVPixelFormatType_DepthFloat16](kcvpixelformattype_depthfloat16.md)
- [kCVPixelFormatType_DepthFloat32](kcvpixelformattype_depthfloat32.md)
- [kCVPixelFormatType_DisparityFloat16](kcvpixelformattype_disparityfloat16.md)
- [kCVPixelFormatType_DisparityFloat32](kcvpixelformattype_disparityfloat32.md)
- [kCVPixelFormatType_16VersatileBayer](kcvpixelformattype_16versatilebayer.md)
- [kCVPixelFormatType_40ARGBLEWideGamut](kcvpixelformattype_40argblewidegamut.md)
- [kCVPixelFormatType_40ARGBLEWideGamutPremultiplied](kcvpixelformattype_40argblewidegamutpremultiplied.md)
- [kCVPixelFormatType_420YpCbCr8VideoRange_8A_TriPlanar](kcvpixelformattype_420ypcbcr8videorange_8a_triplanar.md)
- [kCVPixelFormatType_422YpCbCr16BiPlanarVideoRange](kcvpixelformattype_422ypcbcr16biplanarvideorange.md)
- [kCVPixelFormatType_422YpCbCr8BiPlanarFullRange](kcvpixelformattype_422ypcbcr8biplanarfullrange.md)
- [kCVPixelFormatType_422YpCbCr8BiPlanarVideoRange](kcvpixelformattype_422ypcbcr8biplanarvideorange.md)
- [kCVPixelFormatType_4444AYpCbCrFloat](kcvpixelformattype_4444aypcbcrfloat.md)
- [kCVPixelFormatType_444YpCbCr16BiPlanarVideoRange](kcvpixelformattype_444ypcbcr16biplanarvideorange.md)
- [kCVPixelFormatType_444YpCbCr16VideoRange_16A_TriPlanar](kcvpixelformattype_444ypcbcr16videorange_16a_triplanar.md)
- [kCVPixelFormatType_444YpCbCr8BiPlanarFullRange](kcvpixelformattype_444ypcbcr8biplanarfullrange.md)
- [kCVPixelFormatType_444YpCbCr8BiPlanarVideoRange](kcvpixelformattype_444ypcbcr8biplanarvideorange.md)
- [kCVPixelFormatType_64RGBALE](kcvpixelformattype_64rgbale.md)
- [kCVPixelFormatType_64RGBA_DownscaledProResRAW](kcvpixelformattype_64rgba_downscaledproresraw.md)
- [kCVPixelFormatType_OneComponent10](kcvpixelformattype_onecomponent10.md)
- [kCVPixelFormatType_OneComponent12](kcvpixelformattype_onecomponent12.md)
- [kCVPixelFormatType_OneComponent16](kcvpixelformattype_onecomponent16.md)
- [kCVPixelFormatType_TwoComponent16](kcvpixelformattype_twocomponent16.md)
- [kCVPixelFormatType_30RGBLE_8A_BiPlanar](kcvpixelformattype_30rgble_8a_biplanar.md)
- [kCVPixelFormatType_30RGB_r210](kcvpixelformattype_30rgb_r210.md)
- [kCVPixelFormatType_96VersatileBayerPacked12](kcvpixelformattype_96versatilebayerpacked12.md)
- [kCVPixelFormatType_Lossless_30RGBLEPackedWideGamut](kcvpixelformattype_lossless_30rgblepackedwidegamut.md)
- [kCVPixelFormatType_Lossless_30RGBLE_8A_BiPlanar](kcvpixelformattype_lossless_30rgble_8a_biplanar.md)
- [kCVPixelFormatType_Lossless_420YpCbCr10PackedBiPlanarFullRange](kcvpixelformattype_lossless_420ypcbcr10packedbiplanarfullrange.md)
- [kCVPixelFormatType_Lossless_64RGBAHalf](kcvpixelformattype_lossless_64rgbahalf.md)

## See Also

### Constants

- [Pixel Format Description Keys](pixel-format-description-keys.md): The attributes of a pixel format.
