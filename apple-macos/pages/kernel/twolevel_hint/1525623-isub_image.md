> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/twolevel_hint/1525623-isub_image](https://developer.apple.com/documentation/kernel/twolevel_hint/1525623-isub_image)

# isub_image

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The subimage in which the symbol is defined. It is an index into the list of images that make up the umbrella image. If this field is 0, the symbol is in the umbrella image itself. If the image is not an umbrella framework or library, this field is 0.

## Declaration

```objectivec
uint32_t isub_image:8;
```
