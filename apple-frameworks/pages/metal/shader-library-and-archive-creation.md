> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/shader-library-and-archive-creation](https://developer.apple.com/documentation/metal/shader-library-and-archive-creation)

# Shader library and archive creation (Swift)

**Framework:** Metal  
**Kind:** API Collection

Create static and dynamic shader libraries, and binary shader archives.

## Topics

### Creating shader libraries

- [makeDefaultLibrary()](mtldevice/makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.
- [makeDefaultLibrary(bundle:)](mtldevice/makedefaultlibrary%28bundle_%29.md): Creates a Metal library instance that contains the functions in a bundle’s default Metal library.
- [makeLibrary(URL:)](mtldevice/makelibrary%28url_%29.md): Creates a Metal library instance that contains the functions in the Metal library file at a URL.
- [makeLibrary(source:options:)](mtldevice/makelibrary%28source_options_%29.md): Synchronously creates a Metal library instance by compiling the functions in a source string.
- [makeLibrary(source:options:completionHandler:)](mtldevice/makelibrary%28source_options_completionhandler_%29.md): Asynchronously creates a Metal library instance by compiling the functions in a source string.
- [makeLibrary(stitchedDescriptor:)](mtldevice/makelibrary%28stitcheddescriptor_%29.md): Synchronously creates a Metal library from the function stitching graphs in a descriptor.
- [makeLibrary(stitchedDescriptor:completionHandler:)](mtldevice/makelibrary%28stitcheddescriptor_completionhandler_%29.md): Asynchronously creates a Metal library from the function stitching graphs in a descriptor.
- [makeLibrary(data:)](mtldevice/makelibrary%28data_%29-7khmh.md): Creates a Metal library instance that contains the functions in a precompiled Metal library.
- [makeLibrary(data:)](mtldevice/makelibrary%28data_%29.md): Creates a Metal library instance from a dispatch-data instance that contains the functions in a precompiled Metal library.
- [MTLNewLibraryCompletionHandler](mtlnewlibrarycompletionhandler.md): A completion handler signature a method calls when it finishes creating a Metal library.
- [makeLibrary(filepath:)](mtldevice/makelibrary%28filepath_%29.md): Deprecated. Creates a Metal library instance that contains the functions in the Metal library file at a file path.

### Creating dynamic shader libraries

- [supportsDynamicLibraries](mtldevice/supportsdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in compute pipelines.
- [supportsRenderDynamicLibraries](mtldevice/supportsrenderdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in render pipelines.
- [makeDynamicLibrary(library:)](mtldevice/makedynamiclibrary%28library_%29.md): Creates a Metal dynamic library instance from a Metal library instance.
- [makeDynamicLibrary(url:)](mtldevice/makedynamiclibrary%28url_%29.md): Creates a Metal dynamic library instance that contains the functions in the Metal library file at a URL.
- [MTLDynamicLibraryError.Code](mtldynamiclibraryerror-swift.struct/code.md): Error codes that Metal can generate when creating dynamic libraries.
- [MTLDynamicLibraryDomain](mtldynamiclibrarydomain.md): The domain for Metal dynamic library errors.

### Creating binary shader archives

- [makeBinaryArchive(descriptor:)](mtldevice/makebinaryarchive%28descriptor_%29.md): Creates a Metal binary archive instance.
- [MTLBinaryArchiveDescriptor](mtlbinaryarchivedescriptor.md): A description of a binary shader archive that you want to create.
- [MTLBinaryArchiveError.Code](mtlbinaryarchiveerror-swift.struct/code.md): Error codes when creating binary archives of compiled shader code.
- [MTLBinaryArchiveDomain](mtlbinaryarchivedomain.md): The domain for Metal binary archive errors.

## See Also

### Working with GPU devices

- [Device inspection](device-inspection.md): Locate and identify a GPU and the features it supports, and sample its counters.
- [Work submission](work-submission.md): Create queues that submit work to the GPU or load assets into GPU resources, and indirect command buffers that group your frequent commands together.
- [Pipeline state creation](pipeline-state-creation.md): Create pipeline states for render and compute passes, samplers, depth and stencil states, and indirect command buffers.
- [Resource creation](resource-creation.md): Load assets with input/output queues and make various resource instances, such as buffers, textures, acceleration structures, and memory heaps.

# Shader library and archive creation (Objective-C)

**Framework:** Metal  
**Kind:** API Collection

Create static and dynamic shader libraries, and binary shader archives.

## Topics

### Creating shader libraries

- [newDefaultLibrary](mtldevice/makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.
- [newDefaultLibraryWithBundle:error:](mtldevice/makedefaultlibrary%28bundle_%29.md): Creates a Metal library instance that contains the functions in a bundle’s default Metal library.
- [newLibraryWithURL:error:](mtldevice/makelibrary%28url_%29.md): Creates a Metal library instance that contains the functions in the Metal library file at a URL.
- [newLibraryWithSource:options:error:](mtldevice/makelibrary%28source_options_%29.md): Synchronously creates a Metal library instance by compiling the functions in a source string.
- [newLibraryWithSource:options:completionHandler:](mtldevice/makelibrary%28source_options_completionhandler_%29.md): Asynchronously creates a Metal library instance by compiling the functions in a source string.
- [newLibraryWithStitchedDescriptor:error:](mtldevice/makelibrary%28stitcheddescriptor_%29.md): Synchronously creates a Metal library from the function stitching graphs in a descriptor.
- [newLibraryWithStitchedDescriptor:completionHandler:](mtldevice/makelibrary%28stitcheddescriptor_completionhandler_%29.md): Asynchronously creates a Metal library from the function stitching graphs in a descriptor.
- [newLibraryWithData:error:](mtldevice/makelibrary%28data_%29.md): Creates a Metal library instance from a dispatch-data instance that contains the functions in a precompiled Metal library.
- [MTLNewLibraryCompletionHandler](mtlnewlibrarycompletionhandler.md): A completion handler signature a method calls when it finishes creating a Metal library.
- [newLibraryWithFile:error:](mtldevice/makelibrary%28filepath_%29.md): Deprecated. Creates a Metal library instance that contains the functions in the Metal library file at a file path.

### Creating dynamic shader libraries

- [supportsDynamicLibraries](mtldevice/supportsdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in compute pipelines.
- [supportsRenderDynamicLibraries](mtldevice/supportsrenderdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in render pipelines.
- [newDynamicLibrary:error:](mtldevice/makedynamiclibrary%28library_%29.md): Creates a Metal dynamic library instance from a Metal library instance.
- [newDynamicLibraryWithURL:error:](mtldevice/makedynamiclibrary%28url_%29.md): Creates a Metal dynamic library instance that contains the functions in the Metal library file at a URL.
- [MTLDynamicLibraryError](mtldynamiclibraryerror-swift.struct/code.md): Error codes that Metal can generate when creating dynamic libraries.
- [MTLDynamicLibraryDomain](mtldynamiclibrarydomain.md): The domain for Metal dynamic library errors.

### Creating binary shader archives

- [newBinaryArchiveWithDescriptor:error:](mtldevice/makebinaryarchive%28descriptor_%29.md): Creates a Metal binary archive instance.
- [MTLBinaryArchiveDescriptor](mtlbinaryarchivedescriptor.md): A description of a binary shader archive that you want to create.
- [MTLBinaryArchiveError](mtlbinaryarchiveerror-swift.struct/code.md): Error codes when creating binary archives of compiled shader code.
- [MTLBinaryArchiveDomain](mtlbinaryarchivedomain.md): The domain for Metal binary archive errors.

## See Also

### Working with GPU devices

- [Device inspection](device-inspection.md): Locate and identify a GPU and the features it supports, and sample its counters.
- [Work submission](work-submission.md): Create queues that submit work to the GPU or load assets into GPU resources, and indirect command buffers that group your frequent commands together.
- [Pipeline state creation](pipeline-state-creation.md): Create pipeline states for render and compute passes, samplers, depth and stencil states, and indirect command buffers.
- [Resource creation](resource-creation.md): Load assets with input/output queues and make various resource instances, such as buffers, textures, acceleration structures, and memory heaps.
