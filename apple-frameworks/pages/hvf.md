> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf](https://developer.apple.com/documentation/hvf)

# hvf (Swift)

**Framework:** hvf  
**Kind:** Framework  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Render Hierarchical Variable Font (HVF) glyph outlines, and support font editors and related tools.

<a id="Overview"></a>

## Overview

The `hvf` library provides C and Swift interfaces. The C interface supports rendering `hvgl` and `hvpm` tables in existing fonts.

The Swift interface adds support for the following:

- Writing a custom loader to render HVF glyphs from other sources, such as a database in a font editor.
- Generating data needed to build an `hvgl` table, using the same code as the custom loader.
- Interactively modifying part appearances and data, such as in a font editor.

## Topics

### Classes

- [HVGLPartLoader](hvf/hvglpartloader.md): Special loader object for an HVGL table in memory, which must be Double-aligned Typically this is from a memory-mapped font
- [PartRenderer](hvf/partrenderer.md): An object that can be used to set parameters for rendering a part, to render the part, and to diagnose the results of rendering

### Protocols

- [CompositeWriter](hvf/compositewriter.md): Protocol for creating a Composite part for rendering or to build an HVGL table
- [PartGenerator](hvf/partgenerator.md): Protocol for returning a writer object to create Shape or Composite data
- [ShapeWriter](hvf/shapewriter.md): A protocol for creating a Shape part for rendering or to build an HVGL table

### Structures

- [CompositeExtremumIndex](hvf/compositeextremumindex.md): The index of an extremum rotation or translation in a Composite part
- [CompositeSubpart](hvf/compositesubpart.md): A subpart in a Composite part
- [CompositeSubpartTranslation](hvf/compositesubparttranslation.md): A subpart translation in a Composite part

### Variables

- [hvfLibraryVersion](hvf/hvflibraryversion-swift.var.md): Return the version of the HVF library

### Type Aliases

- [CustomPartLoader](hvf/custompartloader.md): Closure which loads parts from an arbitrary source The first parameter is the part index which uniquely identifiers a part; these are assigned by the loader The second parameter is a PartGenerator the loader uses to get a ShapeWriter or CompositeWriter to create the requested part The result is the generated part, passed back in a PartResult

### Enumerations

- [AxisExtremum](hvf/axisextremum.md): Which extremum within an axis
- [PartResult](hvf/partresult.md): The result returned from a part loader
- [PointCoordinate](hvf/pointcoordinate.md): Which coordinate within a point
- [SegmentBlendType](hvf/segmentblendtype.md): The blend type for a segment of a path
- [SegmentPoint](hvf/segmentpoint.md): Which point within a segment

# hvf (Objective-C)

**Framework:** hvf  
**Kind:** Framework  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Render Hierarchical Variable Font (HVF) glyph outlines, and support font editors and related tools.

<a id="Overview"></a>

## Overview

The `hvf` library provides C and Swift interfaces. The C interface supports rendering `hvgl` and `hvpm` tables in existing fonts.

The Swift interface adds support for the following:

- Writing a custom loader to render HVF glyphs from other sources, such as a database in a font editor.
- Generating data needed to build an `hvgl` table, using the same code as the custom loader.
- Interactively modifying part appearances and data, such as in a font editor.

## Topics

### Structures

- [HVFLibraryVersion](hvf/hvflibraryversion-c.struct.md): The type used for the version of the hvf library.
- [HVFPartInfo](hvf/hvfpartinfo.md): The type used for part information that is passed from the scaler to the callback.
- [HVFPoint](hvf/hvfpoint.md): The type of a single 2D point passed from the scaler to the callback.
- [HVFTableVersion](hvf/hvftableversion.md): The type used for the `hvgl` table version supported by this version of the hvf library.
- [HVFTranslation](hvf/hvftranslation.md): The type of a 2D translation passed to the scaler.

### Unions

- [HVFPartRenderParameters](hvf/hvfpartrenderparameters.md): A union type describing associated data values for cases of `HVFPartRenderInstruction`.

### Functions

- [HVF_clear_part_cache](hvf/hvf_clear_part_cache.md): Clear the cache of loaded parts.
- [HVF_close_part_renderer](hvf/hvf_close_part_renderer.md): Reclaim any subsidiary storage used by the renderer and destroy it.
- [HVF_glyph_count](hvf/hvf_glyph_count.md): Returns the number of glyphs (suitable for rendering) in the `hvgl` table.
- [HVF_library_version](hvf/hvf_library_version.md): Return the version of the hvf library.
- [HVF_open_part_renderer](hvf/hvf_open_part_renderer.md): Create a part renderer in the storage provided.
- [HVF_part_count](hvf/hvf_part_count.md): Return the number of parts in the `hvgl` table.
- [HVF_part_renderer_storage_size](hvf/hvf_part_renderer_storage_size.md): Return the storage that must be allocated for a part renderer.
- [HVF_render_current_part](hvf/hvf_render_current_part.md): Render the current part using the supplied callback.
- [HVF_render_part_axis_count](hvf/hvf_render_part_axis_count.md): Return the number of axes for the current part, or -1 if the part is not set.
- [HVF_set_axis_value](hvf/hvf_set_axis_value.md): Set the axis value.
- [HVF_set_render_part](hvf/hvf_set_render_part.md): Set the renderer to render the part indicated by the part index.
- [HVF_table_version](hvf/hvf_table_version.md): Return the `hvgl` table version supported by the scaler code.

### Type Aliases

- [HVFAxisValue](hvf/hvfaxisvalue.md): A value that can be set on an axis.
- [HVFPartIndex](hvf/hvfpartindex.md): Index of a part within an `hvgl` table or other source.
- [HVFRenderContext](hvf/hvfrendercontext.md): The type of the callback passed to `HVF_render_current_part()`.
- [HVFRotation](hvf/hvfrotation.md): The type of a rotation passed to the scaler.
- [HVFXYCoord](hvf/hvfxycoord.md): The type used for 2D x and y coordinates.

### Enumerations

- [HVFPartRenderAction](hvf/hvfpartrenderaction.md): Actions that a render context may return to the scaler.
- [HVFPartRenderInstruction](hvf/hvfpartrenderinstruction.md): Instruction passed by the scaler to a callback. Some of the instructions have associated data described by the `HVFPartRenderParams` union.
