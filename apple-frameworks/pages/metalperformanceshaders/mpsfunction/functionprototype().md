> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsfunction/functionprototype()](https://developer.apple.com/documentation/metalperformanceshaders/mpsfunction/functionprototype())

# functionPrototype() (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func functionPrototype() -> String
```

<a id="discussion"></a>

## Discussion

Get a source level representation of the function prototype

If your application is building its shaders from source at run time, this string will declare the appropriate function prototypes for the conversion routine appropriate to the version of MetalHDR you are currently running.

```
         Note: It is expected that most applications will not use this interface because they
         are building kernels offline from a .metallib. Such applications should simply:

            #include <MPSFunctions/MPSFunctions.h>

         in their .metal file, and declare any functions produced by this object using

            MPSFUNCTION_DECLARE_COLOR_CONVERSION( _functionName );

         or similar, depending on the type of the function created. The _functionName should
         match the name passed to the object -init method.
```

# functionPrototype (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (NSString *) functionPrototype;
```

<a id="discussion"></a>

## Discussion

Get a source level representation of the function prototype

If your application is building its shaders from source at run time, this string will declare the appropriate function prototypes for the conversion routine appropriate to the version of MetalHDR you are currently running.

```
         Note: It is expected that most applications will not use this interface because they
         are building kernels offline from a .metallib. Such applications should simply:

            #include <MPSFunctions/MPSFunctions.h>

         in their .metal file, and declare any functions produced by this object using

            MPSFUNCTION_DECLARE_COLOR_CONVERSION( _functionName );

         or similar, depending on the type of the function created. The _functionName should
         match the name passed to the object -init method.
```
