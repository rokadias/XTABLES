# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: protos/XTableValues.proto
# Protobuf Python Version: 5.29.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    29,
    0,
    '',
    'protos/XTableValues.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x19protos/XTableValues.proto\x12\x08JXTABLES\"\"\n\nCoordinate\x12\t\n\x01x\x18\x01 \x01(\x01\x12\t\n\x01y\x18\x02 \x01(\x01\";\n\x0e\x43oordinateList\x12)\n\x0b\x63oordinates\x18\x01 \x03(\x0b\x32\x14.JXTABLES.Coordinate\"V\n\x0c\x43ontrolPoint\x12\t\n\x01x\x18\x01 \x01(\x01\x12\t\n\x01y\x18\x02 \x01(\x01\x12\x1c\n\x0frotationDegrees\x18\x03 \x01(\x01H\x00\x88\x01\x01\x42\x12\n\x10_rotationDegrees\"<\n\x0b\x42\x65zierCurve\x12-\n\rcontrolPoints\x18\x01 \x03(\x0b\x32\x16.JXTABLES.ControlPoint\"\x9a\x01\n\x1fRequestVisionCoprocessorMessage\x12%\n\x05start\x18\x01 \x01(\x0b\x32\x16.JXTABLES.ControlPoint\x12#\n\x03\x65nd\x18\x02 \x01(\x0b\x32\x16.JXTABLES.ControlPoint\x12+\n\x07options\x18\x03 \x01(\x0b\x32\x1a.JXTABLES.TraversalOptions\"\xe2\x06\n\x10TraversalOptions\x12\x1c\n\x0fmetersPerSecond\x18\x01 \x01(\x01H\x00\x88\x01\x01\x12!\n\x14\x66inalRotationDegrees\x18\x02 \x01(\x01H\x01\x88\x01\x01\x12(\n\x1b\x61\x63\x63\x65lerationMetersPerSecond\x18\x03 \x01(\x01H\x02\x88\x01\x01\x12$\n\x17\x66\x61\x63\x65NearestReefAprilTag\x18\x04 \x01(\x08H\x03\x88\x01\x01\x12>\n1endFaceNearestReefAprilTagPathThresholdPercentage\x18\x05 \x01(\x01H\x04\x88\x01\x01\x12G\n faceNearestReefAprilTagDirection\x18\x06 \x01(\x0e\x32\x18.JXTABLES.RobotDirectionH\x05\x88\x01\x01\x12)\n\x1c\x66inalRotationTurnSpeedFactor\x18\x07 \x01(\x01H\x06\x88\x01\x01\x12@\n3startFaceNearestReefAprilTagPathThresholdPercentage\x18\x08 \x01(\x01H\x07\x88\x01\x01\x12\"\n\x15snapToNearestAprilTag\x18\t \x01(\x08H\x08\x88\x01\x01\x12:\n-aprilTagRotationDegreesTurnSpeedFactorPerStep\x18\n \x01(\x01H\t\x88\x01\x01\x42\x12\n\x10_metersPerSecondB\x17\n\x15_finalRotationDegreesB\x1e\n\x1c_accelerationMetersPerSecondB\x1a\n\x18_faceNearestReefAprilTagB4\n2_endFaceNearestReefAprilTagPathThresholdPercentageB#\n!_faceNearestReefAprilTagDirectionB\x1f\n\x1d_finalRotationTurnSpeedFactorB6\n4_startFaceNearestReefAprilTagPathThresholdPercentageB\x18\n\x16_snapToNearestAprilTagB0\n._aprilTagRotationDegreesTurnSpeedFactorPerStep\"s\n\x0c\x42\x65zierCurves\x12%\n\x06\x63urves\x18\x01 \x03(\x0b\x32\x15.JXTABLES.BezierCurve\x12\x30\n\x07options\x18\x02 \x01(\x0b\x32\x1a.JXTABLES.TraversalOptionsH\x00\x88\x01\x01\x42\n\n\x08_options\"\x17\n\nDoubleList\x12\t\n\x01v\x18\x01 \x03(\x01\"\x17\n\nStringList\x12\t\n\x01v\x18\x01 \x03(\t\"\x18\n\x0bIntegerList\x12\t\n\x01v\x18\x01 \x03(\x05\"\x16\n\tBytesList\x12\t\n\x01v\x18\x01 \x03(\x0c\"\x15\n\x08LongList\x12\t\n\x01v\x18\x01 \x03(\x03\"\x16\n\tFloatList\x12\t\n\x01v\x18\x01 \x03(\x02\"\x15\n\x08\x42oolList\x12\t\n\x01v\x18\x01 \x03(\x08*%\n\x0eRobotDirection\x12\t\n\x05\x46RONT\x10\x00\x12\x08\n\x04\x42\x41\x43K\x10\x01\x32v\n\x11VisionCoprocessor\x12\x61\n\x1cRequestBezierPathWithOptions\x12).JXTABLES.RequestVisionCoprocessorMessage\x1a\x16.JXTABLES.BezierCurvesb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'protos.XTableValues_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_ROBOTDIRECTION']._serialized_start=1599
  _globals['_ROBOTDIRECTION']._serialized_end=1636
  _globals['_COORDINATE']._serialized_start=39
  _globals['_COORDINATE']._serialized_end=73
  _globals['_COORDINATELIST']._serialized_start=75
  _globals['_COORDINATELIST']._serialized_end=134
  _globals['_CONTROLPOINT']._serialized_start=136
  _globals['_CONTROLPOINT']._serialized_end=222
  _globals['_BEZIERCURVE']._serialized_start=224
  _globals['_BEZIERCURVE']._serialized_end=284
  _globals['_REQUESTVISIONCOPROCESSORMESSAGE']._serialized_start=287
  _globals['_REQUESTVISIONCOPROCESSORMESSAGE']._serialized_end=441
  _globals['_TRAVERSALOPTIONS']._serialized_start=444
  _globals['_TRAVERSALOPTIONS']._serialized_end=1310
  _globals['_BEZIERCURVES']._serialized_start=1312
  _globals['_BEZIERCURVES']._serialized_end=1427
  _globals['_DOUBLELIST']._serialized_start=1429
  _globals['_DOUBLELIST']._serialized_end=1452
  _globals['_STRINGLIST']._serialized_start=1454
  _globals['_STRINGLIST']._serialized_end=1477
  _globals['_INTEGERLIST']._serialized_start=1479
  _globals['_INTEGERLIST']._serialized_end=1503
  _globals['_BYTESLIST']._serialized_start=1505
  _globals['_BYTESLIST']._serialized_end=1527
  _globals['_LONGLIST']._serialized_start=1529
  _globals['_LONGLIST']._serialized_end=1550
  _globals['_FLOATLIST']._serialized_start=1552
  _globals['_FLOATLIST']._serialized_end=1574
  _globals['_BOOLLIST']._serialized_start=1576
  _globals['_BOOLLIST']._serialized_end=1597
  _globals['_VISIONCOPROCESSOR']._serialized_start=1638
  _globals['_VISIONCOPROCESSOR']._serialized_end=1756
# @@protoc_insertion_point(module_scope)
