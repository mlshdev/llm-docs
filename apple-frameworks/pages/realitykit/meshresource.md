> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource](https://developer.apple.com/documentation/realitykit/meshresource)

# MeshResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A high-level representation of a collection of vertices and edges that define a shape.

## Declaration

```swift
@MainActor @preconcurrency class MeshResource
```

## Mentioned In

- [Creating a plane with low-level mesh](creating-a-plane-with-low-level-mesh.md)
- [Reducing CPU Utilization in Your RealityKit App](reducing-cpu-utilization-in-your-realitykit-app.md)

<a id="overview"></a>

## Overview

Use [MeshResource](meshresource.md) to create procedural geometry from built-in primitives like boxes, spheres, planes, and cylinders, or from custom mesh data. Assign a mesh resource to an entity’s [ModelComponent](modelcomponent.md) alongside an array of [Material](material.md) instances to render the shape in a scene.

Check [expectedMaterialCount](meshresource/expectedmaterialcount.md) to determine how many materials the mesh requires.

## Topics

### Creating a mesh resource

- [generate(from:)](meshresource/generate%28from_%29-4aahn.md): Create a mesh resource from contents.
- [generate(from:)](meshresource/generate%28from_%29-4aahn.md): Create a mesh resource from contents.
- [init(from:)](meshresource/init%28from_%29-1i7c9.md): Asynchronously creates a mesh resource from a low-level mesh.
- [init(from:)](meshresource/init%28from_%29-1i7c9.md): Asynchronously creates a mesh resource from a low-level mesh.
- [init(shape:)](meshresource/init%28shape_%29-3rtda.md): Generates a MeshResource from a ShapeResource.
- [init(shape:)](meshresource/init%28shape_%29-3rtda.md): Generates a MeshResource from a ShapeResource.
- [generateAsync(from:)](meshresource/generateasync%28from_%29-1n2vv.md): Deprecated. Create a mesh resource from contents asynchronously.
- [generateAsync(from:)](meshresource/generateasync%28from_%29-1n2vv.md): Deprecated. Create a mesh resource from contents asynchronously.

### Creating a low level resource

- [init(from:)](meshresource/init%28from_%29-1i7c9.md): Asynchronously creates a mesh resource from a low-level mesh.
- [init(from:)](meshresource/init%28from_%29-1i7c9.md): Asynchronously creates a mesh resource from a low-level mesh.
- [lowLevelMesh](meshresource/lowlevelmesh.md): The low-level mesh that this mesh is built from, if any.

### Configuring the resource

- [expectedMaterialCount](meshresource/expectedmaterialcount.md): The number of material entries required to render the mesh resource.
- [replace(with:)](meshresource/replace%28with_%29-g0kn.md): Replace the contents of this mesh resource.
- [replace(with:)](meshresource/replace%28with_%29-g0kn.md): Replace the contents of this mesh resource.
- [replaceAsync(with:)](meshresource/replaceasync%28with_%29.md): Deprecated. Replace the contents of this mesh resource asynchronously.

### Accessing resource data

- [contents](meshresource/contents-swift.property.md): Get the contents of the mesh asset.

### Getting a bounding box

- [bounds](meshresource/bounds.md): A box that bounds the mesh in local coordinate space.

### Creating a box

- [generateBox(size:cornerRadius:)](meshresource/generatebox%28size_cornerradius_%29-8em0v.md): Creates a box mesh from a length for the box’s width, height, and depth, and a radius for the corners.
- [generateBox(size:cornerRadius:)](meshresource/generatebox%28size_cornerradius_%29-2ovma.md): Creates a box mesh from a vector of three scalar values that represent width, height, and depth, respectively, and a radius for the corners.
- [generateBox(width:height:depth:cornerRadius:splitFaces:)](meshresource/generatebox%28width_height_depth_cornerradius_splitfaces_%29.md): Creates a box mesh from a width, height, depth and a corner radius, with the ability to assign different materials to each face.
- [generateBox(size:majorCornerRadius:minorCornerRadius:)](meshresource/generatebox%28size_majorcornerradius_minorcornerradius_%29.md): Creates a box mesh from a vector of three scalar values that represent width, height, and depth, respectively, and radii for the corners.

### Creating a plane

- [generatePlane(width:height:cornerRadius:)](meshresource/generateplane%28width_height_cornerradius_%29.md): Creates a new rectangle mesh with the specified dimensions in the entity’s xy-plane.
- [generatePlane(width:depth:cornerRadius:)](meshresource/generateplane%28width_depth_cornerradius_%29.md): Creates a new rectangle mesh with the specified dimensions in the entity’s xz-plane.

### Creating a primitive shape

- [generateSphere(radius:)](meshresource/generatesphere%28radius_%29.md): Creates a new sphere mesh with the specified radius.
- [generateCone(height:radius:)](meshresource/generatecone%28height_radius_%29.md): Creates a new cone mesh with the specified dimensions.
- [generateCylinder(height:radius:)](meshresource/generatecylinder%28height_radius_%29.md): Creates a new cylinder mesh with the specified dimensions.

### Creating a text mesh resource

- [generateText(\_:extrusionDepth:font:containerFrame:alignment:lineBreakMode:)](meshresource/generatetext%28__extrusiondepth_font_containerframe_alignment_linebreakmode_%29-3py6y.md): Generates a 3D mesh for rendering static text.
- [generateText(\_:extrusionDepth:font:containerFrame:alignment:lineBreakMode:)](meshresource/generatetext%28__extrusiondepth_font_containerframe_alignment_linebreakmode_%29-3py6y.md): Generates a 3D mesh for rendering static text.
- [init(extruding:textOptions:extrusionOptions:)](meshresource/init%28extruding_textoptions_extrusionoptions_%29-7xk2s.md): Synchronously generates a 3D mesh from a string, with options for text layout and custom extrusions.
- [init(extruding:textOptions:extrusionOptions:)](meshresource/init%28extruding_textoptions_extrusionoptions_%29-7xk2s.md): Synchronously generates a 3D mesh from a string, with options for text layout and custom extrusions.

### Creating a 3D mesh by extruding a 2D path

- [init(extruding:extrusionOptions:)](meshresource/init%28extruding_extrusionoptions_%29-6640v.md): Synchronously generates a 3D mesh by extruding a 2D path.
- [init(extruding:extrusionOptions:)](meshresource/init%28extruding_extrusionoptions_%29-6640v.md): Synchronously generates a 3D mesh by extruding a 2D path.

### Creating a mesh from an anchor

- [init(from:)](meshresource/init%28from_%29-1i7c9.md): Asynchronously creates a mesh resource from a low-level mesh.
- [init(from:)](meshresource/init%28from_%29-1i7c9.md): Asynchronously creates a mesh resource from a low-level mesh.

### Structures

- [MeshResource.Contents](meshresource/contents-swift.struct.md): Value of the contents of the resource.
- [MeshResource.GenerateTextOptions](meshresource/generatetextoptions.md): A type that determines the configuration for rendering text in 2D, before it is extruded.
- [MeshResource.Instance](meshresource/instance.md): An object that transforms a model to a location.
- [MeshResource.JointInfluences](meshresource/jointinfluences.md): A buffer of vertex-joint influences which bind the mesh part’s vertices to a skeleton via a skinning deformation.
- [MeshResource.Model](meshresource/model.md): A model consists of a list of parts.
- [MeshResource.Part](meshresource/part.md): A part of a model consisting of a single material.
- [MeshResource.ShapeExtrusionOptions](meshresource/shapeextrusionoptions.md): A type that determines the extrusion, chamfering, and material assignment of an extruded shape.
- [MeshResource.Skeleton](meshresource/skeleton.md): A skeleton consists of a hierarchy of joints. Each joint defines a coordinate space. Portions of a model may be thought of as having a position in a joint’s local space.

### Initializers

- [init(extruding:extrusionOptions:)](meshresource/init%28extruding_extrusionoptions_%29.md): Synchronously generates a 3D mesh by extruding a 2D path.
- [init(extruding:textOptions:extrusionOptions:)](meshresource/init%28extruding_textoptions_extrusionoptions_%29.md): Synchronously generates a 3D mesh from a string, with options for text layout and custom extrusions.
- [init(from:)](meshresource/init%28from_%29.md): Asynchronously creates a mesh resource from a low-level mesh.
- [init(shape:)](meshresource/init%28shape_%29.md): Generates a MeshResource from a ShapeResource.

### Instance Methods

- [meshPartIndex(modelID:partID:)](meshresource/meshpartindex%28modelid_partid_%29.md): Get the mesh part index for a given model and part identifier.
- [replace(with:)](meshresource/replace%28with_%29.md): Replace the contents of this mesh resource.

### Type Aliases

- [MeshResource.Font](meshresource/font.md): A platform-specific type that represents a font for use in generating a text mesh.

### Type Methods

- [generate(from:)](meshresource/generate%28from_%29.md): Create a mesh resource from contents.
- [generateAsync(from:)](meshresource/generateasync%28from_%29.md): Deprecated. Create a mesh resource from contents asynchronously.
- [generateBox(size:cornerRadius:)](meshresource/generatebox%28size_cornerradius_%29.md): Creates a box mesh from a length for the box’s width, height, and depth, and a radius for the corners.
- [generateText(\_:extrusionDepth:font:containerFrame:alignment:lineBreakMode:)](meshresource/generatetext%28__extrusiondepth_font_containerframe_alignment_linebreakmode_%29.md): Generates a 3D mesh for rendering static text.

## Relationships

### Conforms To

- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model display

- [Creating 3D entities with RealityKit](../visionos/creating-3d-entities-with-realitykit.md): Display a horizontal row of three-dimensional shapes in your visionOS app, using predefined mesh and white material.
- [Creating 3D models as movable windows](../visionos/creating-a-volumetric-window-in-visionos.md): Display 3D content with a volumetric window that people can move.
- [Creating a 3D painting space](../visionos/creating-a-painting-space-in-visionos.md): Implement a painting canvas entity, and update its mesh to represent a stroke.
- [Tracking and visualizing hand movement](../visionos/tracking-and-visualizing-hand-movement.md): Use hand-tracking anchors to display a visual representation of hand transforms in visionOS.
- [Applying mesh to real-world surroundings](../visionos/applying-mesh-to-real-world-surroundings.md): Add a layer of mesh to objects in the real world, using scene reconstruction in ARKit.
- [Obscuring virtual items in a scene behind real-world items](../visionos/obscuring-virtual-items-in-a-scene-behind-real-world-items.md): Increase the realism of an immersive experience by adding entities with invisible materials real-world objects.
- [Manipulating models with RealityKit](manipulating-models-with-realitykit.md): Interact with detailed 3D models using manipulation and clipping controls.
- [ModelComponent](modelcomponent.md): A component that contains a mesh and materials for the visual appearance of an entity.
- [ModelEntity](modelentity.md): A representation of a physical object that RealityKit renders and optionally simulates.
