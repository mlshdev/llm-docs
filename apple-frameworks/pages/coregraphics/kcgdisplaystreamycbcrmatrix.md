> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/kcgdisplaystreamycbcrmatrix](https://developer.apple.com/documentation/coregraphics/kcgdisplaystreamycbcrmatrix)

# kCGDisplayStreamYCbCrMatrix

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Global Variable

## Declaration

```objectivec
extern CFStringRef const kCGDisplayStreamYCbCrMatrix;
```

<a id="discussion"></a>

## Discussion

When outputting frames in 420v or 420f format, this key may be used to control which YCbCr matrix is used The value should be one of the three kCGDisplayStreamYCbCrMatrix values specified below.
